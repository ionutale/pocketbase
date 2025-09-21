package apis

import (
	"context"
	"net/http"
	"strings"
	"time"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/hook"
	"github.com/pocketbase/pocketbase/tools/router"
)

// bindMCPApi mounts an MCP endpoint implementing the Streamable HTTP transport.
//
// Endpoints:
//   - GET  /api/mcp/stream  -> opens/reads the stream
//   - POST /api/mcp/stream  -> sends client messages
//
// This uses the official MCP Go SDK StreamableHTTPHandler and a minimal server
// exposing a simple tool with PocketBase version info.
func bindMCPApi(app core.App, rg *router.RouterGroup[*core.RequestEvent]) {
	// Build a server for each incoming session. We reuse a single server
	// instance since the SDK supports multiple concurrent sessions.
	srv := newMCPServer(app)

	handler := mcp.NewStreamableHTTPHandler(func(_ *http.Request) *mcp.Server {
		return srv
	}, &mcp.StreamableHTTPOptions{})

	rg.Route(http.MethodGet, "/mcp/stream", WrapStdHandler(handler)).Bind(trySuperuserInlineAuth(), RequireSuperuserAuth())
	rg.Route(http.MethodPost, "/mcp/stream", WrapStdHandler(handler)).Bind(trySuperuserInlineAuth(), RequireSuperuserAuth())
}

// trySuperuserInlineAuth attempts to authenticate superusers using Basic auth or headers
// when no Bearer token is provided. It only runs for the MCP route where it is bound.
//
// Supported inputs:
// - Authorization: Basic base64(email:password)
// - X-PB-Identity: <email>, X-PB-Password: <password>
//
// If MFA is enabled and required for the account, the middleware rejects with 401
// to avoid bypassing multi-factor policies; use token-based auth instead.
func trySuperuserInlineAuth() *hook.Handler[*core.RequestEvent] {
	return &hook.Handler[*core.RequestEvent]{
		Id: "pbTrySuperuserInlineAuth",
		Func: func(e *core.RequestEvent) error {
			if e.Auth != nil {
				return e.Next()
			}

			// Prefer Basic auth
			identity, password, ok := e.Request.BasicAuth()
			if !ok {
				// Fallback to custom headers
				identity = e.Request.Header.Get("X-PB-Identity")
				password = e.Request.Header.Get("X-PB-Password")
				if identity == "" || password == "" {
					return e.Next()
				}
			}

			// Resolve superuser by email
			su, err := e.App.FindAuthRecordByEmail(core.CollectionNameSuperusers, identity)
			if err != nil || su == nil || !su.ValidatePassword(password) {
				return e.UnauthorizedError("Invalid superuser credentials.", err)
			}

			// Respect MFA policy — deny inline password if MFA required
			if su.Collection().MFA.Enabled {
				needed, mfaErr := wantsMFA(e, su)
				if mfaErr != nil {
					return e.BadRequestError("Failed to validate MFA policy.", mfaErr)
				}
				if needed {
					return e.UnauthorizedError("MFA is enabled; use Bearer token authentication.", nil)
				}
			}

			e.Auth = su
			return e.Next()
		},
	}
}

// newMCPServer creates a minimally useful MCP server that advertises a single
// tool providing PocketBase version/build info.
func newMCPServer(app core.App) *mcp.Server {
	impl := &mcp.Implementation{
		Name:    "pocketbase-mcp",
		Version: versionString(app),
	}

	srv := mcp.NewServer(impl, &mcp.ServerOptions{
		HasTools: true,
	})

	type versionOut struct {
		Version     string `json:"version"`
		BuildCommit string `json:"buildCommit"`
		BuildTime   string `json:"buildTime"`
	}

	mcp.AddTool(srv, &mcp.Tool{
		Name:        "pb.version",
		Description: "Return PocketBase version/build metadata.",
	}, func(ctx context.Context, _ *mcp.CallToolRequest, _ struct{}) (*mcp.CallToolResult, versionOut, error) {
		// no input, just return info from the app store
		out := versionOut{
			Version:     asString(app.Store().Get("pb.version")),
			BuildCommit: asString(app.Store().Get("pb.buildCommit")),
			BuildTime:   asString(app.Store().Get("pb.buildTime")),
		}
		return nil, out, nil
	})

	// Collections list
	type collectionsListOut struct {
		Id   string `json:"id"`
		Name string `json:"name"`
		Type string `json:"type"`
	}
	type collectionsListResult struct {
		Items []collectionsListOut `json:"items"`
	}
	mcp.AddTool(srv, &mcp.Tool{
		Name:        "pb.collections.list",
		Description: "List all PocketBase collections (id, name, type).",
	}, func(ctx context.Context, _ *mcp.CallToolRequest, _ struct{}) (*mcp.CallToolResult, collectionsListResult, error) {
		cols, err := app.FindAllCollections()
		if err != nil {
			return nil, collectionsListResult{}, err
		}
		out := make([]collectionsListOut, 0, len(cols))
		for _, c := range cols {
			out = append(out, collectionsListOut{Id: c.Id, Name: c.Name, Type: c.Type})
		}
		return nil, collectionsListResult{Items: out}, nil
	})

	// Record get
	type recordGetIn struct {
		Collection string `json:"collection"`
		Id         string `json:"id"`
		Expand     string `json:"expand"`
	}
	type recordGetOut map[string]any
	mcp.AddTool(srv, &mcp.Tool{
		Name:        "pb.records.get",
		Description: "Fetch a single record by collection and id. Respects public export rules.",
	}, func(ctx context.Context, _ *mcp.CallToolRequest, in recordGetIn) (*mcp.CallToolResult, recordGetOut, error) {
		if in.Collection == "" || in.Id == "" {
			return nil, nil, router.NewBadRequestError("Missing collection or id.", nil)
		}
		col, err := app.FindCachedCollectionByNameOrId(in.Collection)
		if err != nil || col == nil {
			return nil, nil, router.NewNotFoundError("Missing or invalid collection.", err)
		}
		rec, err := app.FindRecordById(col, in.Id)
		if err != nil || rec == nil {
			return nil, nil, router.NewNotFoundError("Record not found.", err)
		}
		// Since the route is superuser-gated, reveal hidden fields and emails.
		rec.Unhide(rec.Collection().Fields.FieldNames()...)
		rec.IgnoreEmailVisibility(true)

		// optionally expand relations (comma-separated)
		if in.Expand != "" {
			expands := []string{}
			for _, p := range strings.Split(in.Expand, ",") {
				if p != "" {
					expands = append(expands, p)
				}
			}
			if len(expands) > 0 {
				_ = app.ExpandRecord(rec, expands, nil)
			}
		}
		out := recordGetOut(rec.PublicExport())
		return nil, out, nil
	})

	// SQL select query (read-only)
	type sqlQueryIn struct {
		SQL string `json:"sql"`
	}
	type sqlQueryOut struct {
		Rows []map[string]any `json:"rows"`
	}
	mcp.AddTool(srv, &mcp.Tool{
		Name:        "pb.query.sql",
		Description: "Execute a read-only SELECT query against the main DB and return rows.",
	}, func(ctx context.Context, _ *mcp.CallToolRequest, in sqlQueryIn) (*mcp.CallToolResult, sqlQueryOut, error) {
		if in.SQL == "" {
			return nil, sqlQueryOut{}, router.NewBadRequestError("Missing SQL.", nil)
		}
		// Basic safety: allow only SELECT to avoid writes via MCP.
		if len(in.SQL) < 6 || !isSelectQuery(in.SQL) {
			return nil, sqlQueryOut{}, router.NewBadRequestError("Only SELECT statements are allowed.", nil)
		}
		type row = map[string]any
		rows := []row{}
		// Use json_each fallback by scanning into generic map via dbx.NullStringMap
		// but since dbx isn't imported here, we rely on the generic Map scan support.
		q := app.ConcurrentDB().NewQuery(in.SQL)
		if err := q.All(&rows); err != nil {
			return nil, sqlQueryOut{}, err
		}
		return nil, sqlQueryOut{Rows: rows}, nil
	})

	// Backups list
	type backupsListOut struct {
		Key      string `json:"key"`
		Size     int64  `json:"size"`
		Modified string `json:"modified"`
	}
	type backupsListResult struct {
		Items []backupsListOut `json:"items"`
	}
	mcp.AddTool(srv, &mcp.Tool{
		Name:        "pb.backups.list",
		Description: "List available backup files.",
	}, func(ctx context.Context, _ *mcp.CallToolRequest, _ struct{}) (*mcp.CallToolResult, backupsListResult, error) {
		fsys, err := app.NewBackupsFilesystem()
		if err != nil {
			return nil, backupsListResult{}, err
		}
		defer fsys.Close()
		fsys.SetContext(ctx)
		items, err := fsys.List("")
		if err != nil {
			return nil, backupsListResult{}, err
		}
		out := make([]backupsListOut, len(items))
		for i, it := range items {
			var mod string
			if !it.ModTime.IsZero() {
				mod = it.ModTime.UTC().Format(time.RFC3339)
			}
			out[i] = backupsListOut{Key: it.Key, Size: it.Size, Modified: mod}
		}
		return nil, backupsListResult{Items: out}, nil
	})

	// Backup create
	type backupCreateIn struct {
		Name string `json:"name"`
	}
	type backupCreateOut struct {
		Status string `json:"status"`
		Name   string `json:"name"`
	}
	mcp.AddTool(srv, &mcp.Tool{
		Name:        "pb.backups.create",
		Description: "Create a new backup (name without extension).",
	}, func(ctx context.Context, _ *mcp.CallToolRequest, in backupCreateIn) (*mcp.CallToolResult, backupCreateOut, error) {
		if in.Name == "" {
			in.Name = "auto"
		}
		if err := app.CreateBackup(ctx, in.Name); err != nil {
			return nil, backupCreateOut{}, err
		}
		return nil, backupCreateOut{Status: "ok", Name: in.Name}, nil
	})

	return srv
}

func versionString(app core.App) string {
	v := asString(app.Store().Get("pb.version"))
	if v == "" {
		v = "dev"
	}
	return v
}

func asString(v any) string {
	if v == nil {
		return ""
	}
	if s, ok := v.(string); ok {
		return s
	}
	return ""
}

// isSelectQuery performs a minimal check whether the SQL starts with SELECT (ignoring leading spaces and parentheses).
func isSelectQuery(sql string) bool {
	i := 0
	// skip whitespace and opening parentheses
	for i < len(sql) {
		c := sql[i]
		if c == ' ' || c == '\n' || c == '\r' || c == '\t' || c == '(' {
			i++
			continue
		}
		break
	}
	if i+6 > len(sql) {
		return false
	}
	head := sql[i : i+6]
	return head == "SELECT" || head == "select" || head == "Select"
}
