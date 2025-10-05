package apis

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"

	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/router"
)

// bindAIGeminiApi registers the Gemini proxy endpoints.
func bindAIGeminiApi(app core.App, rg *router.RouterGroup[*core.RequestEvent]) {
	sub := rg.Group("/ai/gemini").Bind(RequireSuperuserAuth())
	sub.POST("/image", aiGeminiGenerateImage)
}

// aiGeminiGenerateImage proxies an image generation request to the Gemini Imagen API.
//
// Env vars used:
//   - GEMINI_API_KEY (required)
//   - GEMINI_IMAGE_MODEL (optional, default: imagen-3.0-generate-002)
//   - GEMINI_API_BASE (optional, default: https://generativelanguage.googleapis.com)
//
// Request JSON body is forwarded largely as-is with a single instance and parameters.
// Example body:
// { "prompt": "A cute robot", "parameters": {"sampleCount":1, "aspectRatio":"1:1"} }
//
// Response: the raw Gemini response is returned, plus a convenience field `images` when possible:
// { "images": [{"mimeType":"image/png","b64":"..."}], "raw": <original> }
func aiGeminiGenerateImage(e *core.RequestEvent) error {
	// Load from settings first, then env, then defaults
	s := e.App.Settings()
	apiKey := strings.TrimSpace(s.AI.Gemini.APIKey)
	if apiKey == "" {
		apiKey = strings.TrimSpace(os.Getenv("GEMINI_API_KEY"))
	}
	if apiKey == "" {
		return e.BadRequestError("Gemini API key is not configured (set in Settings or GEMINI_API_KEY).", nil)
	}

	model := strings.TrimSpace(s.AI.Gemini.Model)
	if model == "" {
		model = strings.TrimSpace(os.Getenv("GEMINI_IMAGE_MODEL"))
	}
	if model == "" {
		model = "imagen-3.0-generate-002"
	}

	base := strings.TrimSpace(s.AI.Gemini.APIBase)
	if base == "" {
		base = strings.TrimSpace(os.Getenv("GEMINI_API_BASE"))
	}
	if base == "" {
		base = "https://generativelanguage.googleapis.com"
	}

	// Accept a small normalized payload from the UI
	var req struct {
		Prompt     string         `json:"prompt"`
		Parameters map[string]any `json:"parameters"`
		// allow passing raw instances to keep it flexible
		Instances []map[string]any `json:"instances"`
	}

	if err := e.BindBody(&req); err != nil {
		return e.BadRequestError("Invalid request body.", err)
	}

	// Construct the upstream payload
	upstream := map[string]any{}
	if len(req.Instances) > 0 {
		upstream["instances"] = req.Instances
	} else {
		upstream["instances"] = []map[string]any{{
			"prompt": req.Prompt,
		}}
	}
	if req.Parameters != nil {
		upstream["parameters"] = req.Parameters
	}

	body, err := json.Marshal(upstream)
	if err != nil {
		return e.BadRequestError("Failed to encode request.", err)
	}

	url := fmt.Sprintf("%s/v1beta/models/%s:predict?key=%s", strings.TrimRight(base, "/"), model, apiKey)
	httpReq, err := http.NewRequest(http.MethodPost, url, bytes.NewReader(body))
	if err != nil {
		return e.BadRequestError("Failed to init upstream request.", err)
	}
	httpReq.Header.Set("Content-Type", "application/json")

	// Use the default client; users can run behind proxies if needed
	resp, err := http.DefaultClient.Do(httpReq)
	if err != nil {
		return e.BadRequestError("Upstream request failed.", err)
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return e.BadRequestError("Failed to read upstream response.", err)
	}

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		// Forward upstream error payload as-is when possible
		return e.JSON(resp.StatusCode, map[string]any{
			"message": fmt.Sprintf("Gemini API error (%d)", resp.StatusCode),
			"raw":     json.RawMessage(respBody),
		})
	}

	// Attempt to extract images to a convenience structure
	var raw any
	if err := json.Unmarshal(respBody, &raw); err != nil {
		// fallback: just stream the raw bytes
		return e.JSON(http.StatusOK, map[string]any{"raw": string(respBody)})
	}

	images := make([]map[string]any, 0)
	// Try to find predictions[].bytesBase64Encoded or nested fields
	m, _ := raw.(map[string]any)
	if m != nil {
		if preds, ok := m["predictions"].([]any); ok {
			for _, p := range preds {
				if pm, ok := p.(map[string]any); ok {
					// direct field
					if b64, ok := pm["bytesBase64Encoded"].(string); ok && b64 != "" {
						images = append(images, map[string]any{
							"mimeType": firstString(pm["mimeType"], "image/png"),
							"b64":      b64,
						})
						continue
					}
					// nested under image
					if im, ok := pm["image"].(map[string]any); ok {
						if b64, ok := im["bytesBase64Encoded"].(string); ok && b64 != "" {
							images = append(images, map[string]any{
								"mimeType": firstString(im["mimeType"], "image/png"),
								"b64":      b64,
							})
							continue
						}
					}
				}
			}
		}
	}

	return e.JSON(http.StatusOK, map[string]any{
		"images": images,
		"raw":    raw,
	})
}

func firstString(v any, def string) string {
	if s, ok := v.(string); ok && s != "" {
		return s
	}
	return def
}
