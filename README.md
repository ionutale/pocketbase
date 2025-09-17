<p align="center">
    <a href="https://pocketbase.io" target="_blank" rel="noopener">
        <img src="https://i.imgur.com/5qimnm5.png" alt="PocketBase - open source backend in 1 file" />
    </a>
</p>

<p align="center">
    <a href="https://github.com/pocketbase/pocketbase/actions/workflows/release.yaml" target="_blank" rel="noopener"><img src="https://github.com/pocketbase/pocketbase/actions/workflows/release.yaml/badge.svg" alt="build" /></a>
    <a href="https://github.com/pocketbase/pocketbase/releases" target="_blank" rel="noopener"><img src="https://img.shields.io/github/release/pocketbase/pocketbase.svg" alt="Latest releases" /></a>
    <a href="https://pkg.go.dev/github.com/pocketbase/pocketbase" target="_blank" rel="noopener"><img src="https://godoc.org/github.com/pocketbase/pocketbase?status.svg" alt="Go package documentation" /></a>
</p>

[PocketBase](https://pocketbase.io) is an open source Go backend that includes:

- embedded database (_SQLite_) with **realtime subscriptions**
- built-in **files and users management**
- convenient **Admin dashboard UI**
- and simple **REST-ish API**

**For documentation and examples, please visit https://pocketbase.io/docs.**

> [!WARNING]
> Please keep in mind that PocketBase is still under active development
> and therefore full backward compatibility is not guaranteed before reaching v1.0.0.

> Developers: looking for repo-specific build/run details? See the local guide: [agents.md](./agents.md).

## API SDK clients

The easiest way to interact with the PocketBase Web APIs is to use one of the official SDK clients:

- **JavaScript - [pocketbase/js-sdk](https://github.com/pocketbase/js-sdk)** (_Browser, Node.js, React Native_)
- **Dart - [pocketbase/dart-sdk](https://github.com/pocketbase/dart-sdk)** (_Web, Mobile, Desktop, CLI_)

You could also check the recommendations in https://pocketbase.io/docs/how-to-use/.


## Overview

### Use as standalone app

You could download the prebuilt executable for your platform from the [Releases page](https://github.com/pocketbase/pocketbase/releases).
Once downloaded, extract the archive and run `./pocketbase serve` in the extracted directory.

The prebuilt executables are based on the [`examples/base/main.go` file](https://github.com/pocketbase/pocketbase/blob/master/examples/base/main.go) and comes with the JS VM plugin enabled by default which allows to extend PocketBase with JavaScript (_for more details please refer to [Extend with JavaScript](https://pocketbase.io/docs/js-overview/)_).

#### Expand all relations (default)

By default the server will automatically expand all relation fields (recursively) in API responses.

To explicitly disable this behavior when running the `serve` command, pass `--no-expand-all`:

```sh
./pocketbase serve --no-expand-all
```

Notes:
- This expands declared direct relation fields iteratively without a fixed depth limit; cycles are guarded.
- Access rules and field visibility still apply; unauthorized relations won\'t be expanded.
- Use with caution on large graphs, as responses can become heavy.

### OpenAPI (Swagger)

PocketBase exposes a basic OpenAPI 3.0 spec generated from the registered routes:

- JSON: `GET /openapi/json`
- YAML: `GET /openapi/yaml`
- HTML viewer (Swagger UI): `GET /openapi/html`

Notes:
- Purpose: discover available endpoints programmatically or load into tools (Swagger UI, Redoc, etc.).
- Scope: the spec lists paths and methods. Schemas/parameters are minimal, intended as a starting point.

Examples:

```sh
curl http://localhost:8090/openapi/json | jq
curl http://localhost:8090/openapi/yaml
open http://localhost:8090/openapi/html
```

### Use as a Go framework/toolkit

PocketBase is distributed as a regular Go library package which allows you to build
your own custom app specific business logic and still have a single portable executable at the end.

Here is a minimal example:

0. [Install Go 1.23+](https://go.dev/doc/install) (_if you haven't already_)

1. Create a new project directory with the following `main.go` file inside it:
    ```go
    package main

    import (
        "log"

        "github.com/pocketbase/pocketbase"
        "github.com/pocketbase/pocketbase/core"
    )

    func main() {
        app := pocketbase.New()

        app.OnServe().BindFunc(func(se *core.ServeEvent) error {
            // registers new "GET /hello" route
            se.Router.GET("/hello", func(re *core.RequestEvent) error {
                return re.String(200, "Hello world!")
            })

            return se.Next()
        })

        if err := app.Start(); err != nil {
            log.Fatal(err)
        }
    }
    ```

2. To init the dependencies, run `go mod init myapp && go mod tidy`.

3. To start the application, run `go run main.go serve`.

4. To build a statically linked executable, you can run `CGO_ENABLED=0 go build` and then start the created executable with `./myapp serve`.

_For more details please refer to [Extend with Go](https://pocketbase.io/docs/go-overview/)._

### Building and running the repo main.go example

To build the minimal standalone executable, like the prebuilt ones in the releases page, you can simply run `go build` inside the `examples/base` directory:

0. [Install Go 1.23+](https://go.dev/doc/install) (_if you haven't already_)
1. Clone/download the repo
2. Navigate to `examples/base`
3. Run `GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build`
   (_https://go.dev/doc/install/source#environment_)
4. Start the created executable by running `./base serve`.

Note that the supported build targets by the pure Go SQLite driver at the moment are:

```
darwin  amd64
darwin  arm64
freebsd amd64
freebsd arm64
linux   386
linux   amd64
linux   arm
linux   arm64
linux   ppc64le
linux   riscv64
linux   s390x
windows amd64
windows arm64
```

### Testing

PocketBase comes with mixed bag of unit and integration tests.
To run them, use the standard `go test` command:

```sh
go test ./...
```

Check also the [Testing guide](http://pocketbase.io/docs/testing) to learn how to write your own custom application tests.

## Security

## Releasing

To create a new GitHub release that produces the prebuilt executables, tag the repository with a SemVer tag prefixed with `v` (for example `v0.1.0`). The repository contains a GitHub Action that runs GoReleaser and will use the tag value as the injected `Version` (see `.goreleaser.yaml`).

Recommended steps:

1. Run the test suite and any checks locally first:

```sh
go test ./...
```

2. Create an annotated tag and push it to your GitHub fork/remote:

```sh
# create an annotated tag
git tag -a v0.1.0 -m "v0.1.0"

# push the tag to the origin (or your fork remote)
git push origin v0.1.0
```

3. After the tag is pushed, the `release` workflow (`.github/workflows/release.yaml`) will run and trigger GoReleaser. By default `.goreleaser.yaml` uses `release.draft: true`, so GoReleaser will create a draft release for you. You can publish it manually from the Releases page, or change `release.draft` to `false` in `.goreleaser.yaml` to auto-publish.

Notes & tips:
- The GoReleaser action observes tags beginning with `v`. The tag value is injected into the binary via the `-ldflags "-X github.com/pocketbase/pocketbase.Version={{ .Version }}"` setting in `.goreleaser.yaml`.
- If you want a pre-release, use a tag like `v1.2.3-rc.1` and GoReleaser will preserve the pre-release semantics.
- The action builds the admin UI (`ui` folder) to ensure deterministic artifacts; make sure any generated frontend assets are committed or that the action can build them.

Local alternative (no tag):

If you want to build locally with a specific version without creating a tag, set the `Version` via `-ldflags`:

```sh
go build -ldflags "-s -w -X github.com/pocketbase/pocketbase.Version=v0.1.0" -o pocketbase ./examples/base
```

After building, verify the version:

```sh
./pocketbase --version
```

If you discover a security vulnerability within PocketBase, please send an e-mail to **support at pocketbase.io**.

All reports will be promptly addressed and you'll be credited in the fix release notes.

## Contributing

PocketBase is free and open source project licensed under the [MIT License](LICENSE.md).
You are free to do whatever you want with it, even offering it as a paid service.

You could help continuing its development by:

- [Contribute to the source code](CONTRIBUTING.md)
- [Suggest new features and report issues](https://github.com/pocketbase/pocketbase/issues)

PRs for new OAuth2 providers, bug fixes, code optimizations and documentation improvements are more than welcome.

But please refrain creating PRs for _new features_ without previously discussing the implementation details.
PocketBase has a [roadmap](https://github.com/orgs/pocketbase/projects/2) and I try to work on issues in specific order and such PRs often come in out of nowhere and skew all initial planning with tedious back-and-forth communication.

Don't get upset if I close your PR, even if it is well executed and tested. This doesn't mean that it will never be merged.
Later we can always refer to it and/or take pieces of your implementation when the time comes to work on the issue (don't worry you'll be credited in the release notes).


