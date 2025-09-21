# PocketBase Release Notes (Unreleased)

These notes capture changes on branch `feature/upgrade-go-dependencies` since the last release on `master`. Focus areas: Model Context Protocol (MCP) integration, security controls, developer ergonomics, and dependency updates.

## Highlights
- MCP server (experimental): enable with `serve --mcp`. Exposes `/api/mcp/stream` using the official go-sdk Streamable HTTP transport.
- Superuser-only access: the MCP endpoint requires superuser auth and supports Basic (`Authorization: Basic ...`) or `X-PB-Identity`/`X-PB-Password` headers (MFA policies enforced). Token auth still works via `Authorization: <token>`.
- New MCP tools:
  - `pb.version`: Version/build metadata of the running server.
  - `pb.collections.list`: Lists all collections. Output: `{ "items": [{ id, name, type }] }`.
  - `pb.records.get`: Fetches a record by collection and id with optional expand.
  - `pb.query.sql`: Read-only SQL. Output: `{ "rows": [{...}] }`.
  - `pb.backups.list`: Lists backup files. Output: `{ "items": [{ key, size, modified }] }`.
  - `pb.backups.create`: Creates a backup by name (zip).
- Config flag: `--mcp` to enable/disable MCP at startup. Route is only registered when enabled.

## Breaking/Behavior Changes
- MCP tool output shapes are object-wrapped per MCP SDK requirements (arrays are not allowed as top-level output):
  - Collections: `{ items: [...] }`
  - Backups: `{ items: [...] }`
  - SQL query: `{ rows: [...] }`

## Security
- MCP endpoint is gated by superuser auth. Inline password auth on this endpoint is supported for convenience but remains subject to MFA rules. If MFA is required for your superuser, use token-based auth instead.
- CORS and rate limits remain enforced via global middlewares.

## Usage
- Start the server with MCP enabled:
```sh
./pocketbase serve --mcp
# or for the example app
cd examples/base && go run main.go serve --mcp
```
- Test the MCP endpoint with Basic auth:
```sh
AUTH=$(printf '%s' 'admin@example.com:StrongPass123' | base64)
curl -N -H "Authorization: Basic $AUTH" http://127.0.0.1:8090/api/mcp/stream
```
- VS Code MCP client example:
  - Server URL: `http://127.0.0.1:8090/api/mcp/stream`
  - Auth options:
    - `Authorization: Basic <base64(email:password)>`, or
    - `X-PB-Identity: <superuser email>` and `X-PB-Password: <password>`, or
    - `Authorization: <SUPERUSER_TOKEN>` (use this when MFA is enabled)

## Developer Notes
- Router: MCP route is conditionally registered only when `--mcp` flag is provided (stored before router initialization).
- Middleware: The MCP route binds an inline credential middleware prior to the superuser check to allow Basic/X-PB auth.
- OpenAPI and Admin UI are unaffected.

## Dependencies
- Go toolchain: `go 1.25`.
- MCP SDK: `github.com/modelcontextprotocol/go-sdk v0.6.0`.
- SQLite (pure-Go): `modernc.org/sqlite v1.39.0` (note: a warning may appear if it differs from the upstream-tested version; ensure `modernc.org/libc` matches the SDK’s go.mod to avoid surprises).

## Known Issues / Troubleshooting
- 404 on `/api/mcp/stream`: ensure the server is started with `--mcp` and the client URL is correct.
- 401 on MCP: verify superuser credentials, MFA requirements, and headers.
- Realtime/SSE via proxies: ensure your proxy has suitable timeouts for long-lived connections.

## Next Steps
- Expand MCP toolset (files, logs, admin operations) as needed.
- Add examples and test coverage for MCP route and tools.
