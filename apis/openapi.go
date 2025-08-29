package apis

import (
	"encoding/json"
	"net/http"
	"sort"
	"strings"

	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/router"
)

// bindOpenAPIApi registers an endpoint that serves a basic OpenAPI 3.0 spec
// generated from the router's registered routes.
func bindOpenAPIApi(app core.App, rg *router.RouterGroup[*core.RequestEvent], r *router.Router[*core.RequestEvent]) {
	subGroup := rg.Group("")
	subGroup.GET("/openapi.json", func(e *core.RequestEvent) error {
		spec := generateOpenAPISpec(app, r)
		// allow browser viewing
		e.Response.Header().Set("Content-Type", "application/json")
		// pretty-print for readability
		enc := json.NewEncoder(e.Response)
		enc.SetIndent("", "  ")
		e.Response.WriteHeader(http.StatusOK)
		return enc.Encode(spec)
	})
}

// openAPISpec is a minimal structure for OpenAPI 3.0 compliant JSON.
// We keep it simple to avoid pulling external dependencies.
type openAPISpec struct {
	OpenAPI string              `json:"openapi"`
	Info    map[string]any      `json:"info"`
	Paths   map[string]any      `json:"paths"`
	Servers []map[string]string `json:"servers,omitempty"`
}

func generateOpenAPISpec(app core.App, r *router.Router[*core.RequestEvent]) openAPISpec {
	paths := map[string]any{}

	routes := r.ListRoutes()
	// stable ordering
	sort.Slice(routes, func(i, j int) bool {
		if routes[i].FullPath == routes[j].FullPath {
			return routes[i].Method < routes[j].Method
		}
		return routes[i].FullPath < routes[j].FullPath
	})

	for _, rt := range routes {
		// skip the root "/" placeholder if any was registered explicitly
		if rt.FullPath == "/" {
			continue
		}

		// convert our wildcard placeholder "{param...}" to OpenAPI style "{param}"
		path := strings.ReplaceAll(rt.FullPath, "...}", "}")
		// ensure path starts with /
		if !strings.HasPrefix(path, "/") {
			// paths from router always start with / for path part, but be safe
			idx := strings.Index(path, "/")
			if idx >= 0 {
				path = path[idx:]
			}
		}

		if _, ok := paths[path]; !ok {
			paths[path] = map[string]any{}
		}
		pathItem := paths[path].(map[string]any)

		method := strings.ToLower(rt.Method)
		if method == "" {
			// if method is empty (Any), list as get by default to avoid invalid OAS
			method = http.MethodGet
		}
		method = strings.ToLower(method)

		// avoid overriding if duplicates exist
		if _, ok := pathItem[method]; !ok {
			pathItem[method] = map[string]any{
				"summary":   "Auto-generated endpoint",
				"responses": map[string]any{"200": map[string]any{"description": "OK"}},
			}
		}
	}

	title := app.Settings().Meta.AppName
	if strings.TrimSpace(title) == "" {
		title = "PocketBase API"
	}
	spec := openAPISpec{
		OpenAPI: "3.0.3",
		Info: map[string]any{
			"title":   title,
			"version": "0.0.0",
		},
		Paths: paths,
		Servers: []map[string]string{
			{"url": app.Settings().Meta.AppURL},
		},
	}
	return spec
}
