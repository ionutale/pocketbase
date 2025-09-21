# PocketBase Agents Guide

This guide explains how to use this repository as a developer (build from source, extend, test) and how to use the compiled PocketBase application in development and production. It consolidates key details from the codebase so you can move fast with confidence.

If you’re looking for the upstream docs, see https://pocketbase.io/docs. This guide focuses on this repo’s structure, commands, and practical usage.


## Contents
- Quick Start (Prebuilt/Compiled)
- Building From Source
- CLI Reference (root flags, `serve`, `superuser`, `migrate`)
- Admin Dashboard (UI)
- Data, Files, and Layout
- REST API and OpenAPI
- Realtime (SSE)
- Backups (create, upload, restore)
- HTTPS and Reverse Proxies
- Configuration and Middleware
- Testing and Linting
- Releases and Versioning
- Docker (optional)
- Troubleshooting


## Quick Start (Prebuilt/Compiled)

Assuming you have a compiled binary named `pocketbase` (or a custom app built from `examples/base`):

```sh
./pocketbase serve
```

- Default address: `http://127.0.0.1:8090`
- Admin Dashboard: `http://127.0.0.1:8090/_/`
- REST API root: `http://127.0.0.1:8090/api/`
- OpenAPI UI: `http://127.0.0.1:8090/openapi/html`

First-run installer: on first startup, an installer helper prints a one-time URL to create your first superuser. If it doesn’t auto-open, copy the URL from the terminal and open it in your browser. You can also bootstrap a superuser via CLI (see `superuser upsert`).

TLS with automatic certificates (Let’s Encrypt):

```sh
./pocketbase serve mydomain.com
# or explicitly:
./pocketbase serve --https 0.0.0.0:443 --http 0.0.0.0:80 mydomain.com
```

- When domain arguments are passed, HTTP defaults to `0.0.0.0:80` and HTTPS to `0.0.0.0:443`. Traffic on HTTP is redirected to HTTPS.
- Certificates are automatically issued via ACME using the provided domain(s), plus implicit `www.` redirects are handled.

Relation expand (default on): API responses expand all relation fields recursively. To disable:

```sh
./pocketbase serve --no-expand-all
```

Common CORS change (default is `*`):

```sh
./pocketbase serve --origins https://app.example.com,https://admin.example.com
```


## Building From Source

Prerequisites:
- Go 1.23+
- Node 18+ only if you plan to modify/build the Admin UI (Svelte + Vite)

Two common build flows:

1) Minimal standalone app (same as the prebuilt binaries)

```sh
cd examples/base
# optional: cross-compile (CGO disabled for static binary)
GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o pocketbase

# run
./pocketbase serve
```

2) Use this package as a Go library in your app

```go
// main.go
package main

import (
    "log"
    "github.com/pocketbase/pocketbase"
    "github.com/pocketbase/pocketbase/core"
)

func main() {
    app := pocketbase.New()
    app.OnServe().BindFunc(func(se *core.ServeEvent) error {
        se.Router.GET("/hello", func(re *core.RequestEvent) error {
            return re.String(200, "Hello world!")
        })
        return se.Next()
    })
    if err := app.Start(); err != nil { log.Fatal(err) }
}
```

```sh
go mod init myapp && go mod tidy
go run . serve

# production build (static)
CGO_ENABLED=0 go build -ldflags "-s -w" -o myapp
./myapp serve
```

Embed version/build metadata locally (optional):

```sh
go build \
  -ldflags "-s -w \
  -X github.com/pocketbase/pocketbase.Version=v0.1.0 \
  -X github.com/pocketbase/pocketbase.BuildCommit=$(git rev-parse --short HEAD) \
  -X github.com/pocketbase/pocketbase.BuildTime=$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  -o pocketbase ./examples/base

./pocketbase --version
```

Supported pure-Go SQLite targets (no CGO):

```
darwin  amd64/arm64
freebsd amd64/arm64
linux   386/amd64/arm/arm64/ppc64le/riscv64/s390x
windows amd64/arm64
```


## CLI Reference

Global/root flags (available for all commands):
- `--dir`: PocketBase data directory (default: `./pb_data` relative to the executable)
- `--encryptionEnv`: name of an env var with a 32-char key for settings encryption
- `--dev`: dev mode (verbose logs and SQL)
- `--queryTimeout`: default SELECT timeout in seconds

### `serve`
Starts the web server and registers API routes and the embedded Admin UI.

Flags and args (from `cmd/serve.go`):
- Positional domain args: trigger ACME/Let’s Encrypt issuance and HTTPS (`www.` redirects included)
- `--http`: HTTP address (default `127.0.0.1:8090` if no domain args; otherwise `0.0.0.0:80`)
- `--https`: HTTPS address (default empty; becomes `0.0.0.0:443` when domain args present)
- `--origins`: CORS allowed origins (default `*`)
- `--expand-all` / `--no-expand-all`: toggle expanding all relation fields in responses

Examples:
```sh
./pocketbase serve
./pocketbase serve --http 0.0.0.0:8080 --origins https://app.example.com
./pocketbase serve mydomain.com --http 0.0.0.0:80 --https 0.0.0.0:443
```

### `superuser`
Manage superuser accounts in the `_superusers` collection.

Subcommands and examples:
```sh
# create or update by email
./pocketbase superuser upsert test@example.com StrongPass123

# create (fails if exists)
./pocketbase superuser create test@example.com StrongPass123

# change password
./pocketbase superuser update test@example.com NewStrongPass456

# delete
./pocketbase superuser delete test@example.com

# one-time password (OTP) for superuser when OTP is enabled on the collection
./pocketbase superuser otp test@example.com
```

Tip: the first superuser can also be created from the one-time installer URL printed on first run. The initial placeholder account `__pbinstaller@example.com` is auto-cleaned once you create a real superuser.

### `migrate` (provided by the example app)
The `examples/base` app registers the migrate plugin with JS templates and automigrate enabled.

Usual operations:
```sh
# run all migrations
./pocketbase migrate up

# rollback last N
./pocketbase migrate down 1

# generate a blank migration file (JS by default in examples/base)
./pocketbase migrate create add_field_x

# snapshot collections to a migration file
./pocketbase migrate collections
```

Notes:
- User migrations live in `pb_migrations` (JS) or `migrations` (Go); the example config uses JS.
- Automigrate watches collection changes and generates snapshots.
- System migrations are applied automatically during bootstrap.


## Admin Dashboard (UI)

The Admin UI (Svelte + Vite) is embedded into the binary from `ui/dist` via `ui/embed.go`. It’s served at `/_/` by the server.

- Use the embedded UI out of the box; no extra steps needed.
- If you modify the UI, build it before building the Go binary:

```sh
cd ui
npm install
npm run build
```

During UI development, you can run the dev server and point it to the backend:

```sh
cd ui
npm run dev    # serves at http://localhost:3000

# optional: change backend target
echo 'PB_BACKEND_URL=http://localhost:8090' > .env.development.local
```


## Data, Files, and Layout

Key directories:
- `pb_data/`: default data directory (overridable via `--dir`)
- `pb_migrations/`: user JS migrations (example app default)
- `migrations/`: user Go migrations (alternative language)
- `pb_public/`: optional static files folder (example app serves `/{path...}` with `index.html` fallback for SPA)

Backups storage is configured via app settings; server code uses `NewBackupsFilesystem()` to store and list `.zip` backups.


## REST API and OpenAPI

API root: `/api`

Notable endpoints present in this codebase:
- `GET /api/version` – returns version/build info (when injected via ldflags)
- Collections CRUD, Record CRUD, Auth endpoints (password, OTP, OAuth2 wiring), Files, Batch, Logs, Cron
- `GET /api/health` – returns health info; includes extra data for superusers
- `GET /openapi/json|yaml|html` – auto-generated OpenAPI 3.0 spec and a Swagger UI viewer

Example OpenAPI usage:
```sh
curl http://localhost:8090/openapi/json | jq
open http://localhost:8090/openapi/html
```

SDKs:
- JS: https://github.com/pocketbase/js-sdk
- Dart: https://github.com/pocketbase/dart-sdk


## Realtime (SSE)

Endpoint: `GET /api/realtime` (Server-Sent Events)

Flow:
1) Open SSE connection:
   ```sh
   curl -N http://localhost:8090/api/realtime
   ```
   The server sends `PB_CONNECT` with a `clientId`.

2) Set subscriptions:
   ```sh
   curl -X POST http://localhost:8090/api/realtime \
     -H 'Content-Type: application/json' \
     -d '{
       "clientId": "<from PB_CONNECT>",
       "subscriptions": [
         "articles/*?expand=author",
         "articles/<recordId>?fields=id,title"
       ]
     }'
   ```

Subscription patterns (prefixes):
- `collectionName/recordId?` and `collectionId/recordId?` – record-level
- `collectionName/*?` and `collectionId/*?` – collection-level (list rule)
- Legacy `collectionName?`/`collectionId?` are supported for compatibility

Messages:
- Shape: `{ "action": "create|update|delete", "record": { ... } }`
- `expand`, `fields`, and `filter` query options on a subscription are honored per client
- Auth upgrades are allowed (guest → auth); otherwise auth changes are rejected per live client


## Backups

All backup endpoints require superuser auth unless noted.

- `GET /api/backups` – list backups
- `POST /api/backups` – create a new backup; body `{ "name": "my_backup.zip" }` (`.zip` required, unique)
- `POST /api/backups/upload` – upload a backup zip (`multipart/form-data`, field `file`)
- `GET /api/backups/{key}` – download backup by key; requires a superuser file token (`token` query param)
- `DELETE /api/backups/{key}` – delete a backup (fails if currently in use)
- `POST /api/backups/{key}/restore` – restore from a backup (async; server restarts)

Notes:
- Only one backup/restore runs at a time; otherwise a 400 is returned
- Some object storage providers are eventually consistent; list/download may lag briefly after create/upload


## HTTPS and Reverse Proxies

Automatic TLS via ACME (Let’s Encrypt): pass domain(s) to `serve` or set `--https`. The server handles HTTP→HTTPS redirects and adds implicit `www.` redirects for convenience.

Examples:
```sh
./pocketbase serve example.com
./pocketbase serve --https 0.0.0.0:443 --http 0.0.0.0:80 example.com
```

Reverse proxy hints:
- Configure your proxy (Nginx, Caddy, Traefik, etc.) to forward the real client IP via standard headers
- The health endpoint includes a `possibleProxyHeader` hint for superusers
- Ensure timeouts support long-lived SSE (`/api/realtime`) and large uploads


## Configuration and Middleware

Selected defaults wired in this codebase:
- CORS: `*` by default; change with `--origins`
- Security headers: sensible defaults applied in middlewares
- Body size limit: default 32MB (`apis.DefaultMaxBodySize`) plus dynamic allowances for file fields on collection upload routes
- Rate limit: enabled via middleware
- Realtime idle timeout: 5 minutes per connection

Global app flags (recap): `--dir`, `--encryptionEnv`, `--dev`, `--queryTimeout`


## Testing and Linting

```sh
# run tests
go test ./...

# with coverage report
make test-report

# lint (golangci-lint)
make lint
```


## Releases and Versioning

This repo includes a GoReleaser workflow (`.github/workflows/release.yaml`) and config (`.goreleaser.yaml`). Tagging with `vX.Y.Z` triggers a release build that injects version metadata and produces platform binaries (draft by default).

Local version injection example:
```sh
go build -ldflags "-s -w -X github.com/pocketbase/pocketbase.Version=v0.1.0" -o pocketbase ./examples/base
./pocketbase --version
```


## Docker (optional)

One simple multi-stage Dockerfile example for the `examples/base` app:

```Dockerfile
# --- build admin UI
FROM node:20-alpine AS ui
WORKDIR /src
COPY ui/ ./ui/
RUN cd ui && npm ci && npm run build

# --- build go app
FROM golang:1.23-alpine AS build
WORKDIR /src
COPY . .
COPY --from=ui /src/ui/dist ./ui/dist
RUN cd examples/base && \
    CGO_ENABLED=0 go build -ldflags "-s -w" -o /out/pocketbase

# --- runtime
FROM alpine:3.20
WORKDIR /app
COPY --from=build /out/pocketbase ./pocketbase
EXPOSE 8090
CMD ["./pocketbase", "serve", "--http", "0.0.0.0:8090"]
```

Build and run:
```sh
docker build -t my-pb .
docker run --rm -p 8090:8090 -v $(pwd)/pb_data:/app/pb_data my-pb
```


## Troubleshooting

- Port in use: change `--http` to another port (e.g. `0.0.0.0:8080`)
- Permission denied on 80/443: run behind a reverse proxy or use a capability helper; or bind to higher ports
- Realtime drops: ensure proxy/server timeouts don’t close SSE; HTTP/2 isn’t required, SSE works over HTTP/1.1
- Large uploads fail: check body size limit and file field sizes; reverse proxy may also need larger limits
- CORS errors in browser: set `--origins` to match your frontend domains
- Missing Admin UI changes in binary: rebuild UI (`ui: npm run build`) before building the Go binary


## Useful Endpoints (recap)

- `/_/` – Admin Dashboard (embedded)
- `/api/` – REST API root
- `/api/version` – version/build metadata
- `/api/health` – health check
- `/api/realtime` – SSE connect and subscription
- `/openapi/json|yaml|html` – OpenAPI spec and viewer


## Next Steps

- Start locally: `./pocketbase serve`
- Create your first superuser from the installer URL or via `superuser upsert`
- Explore OpenAPI UI and Admin Dashboard
- Add collections, define rules, and connect a frontend via the official SDK
