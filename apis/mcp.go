package apis

import (
	"context"
	"net/http"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	"github.com/pocketbase/pocketbase/core"
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

	rg.Route(http.MethodGet, "/mcp/stream", WrapStdHandler(handler))
	rg.Route(http.MethodPost, "/mcp/stream", WrapStdHandler(handler))
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
