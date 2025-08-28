<script>
    import "./styles/tailwind.css"; // Tailwind + DaisyUI
    import "./scss/main.scss"; // existing styles

    import tooltip from "@/actions/tooltip";
    import Confirmation from "@/components/base/Confirmation.svelte";
    import TinyMCE from "@/components/base/TinyMCE.svelte";
    import Toasts from "@/components/base/Toasts.svelte";
    import Toggler from "@/components/base/Toggler.svelte";
    import { appName, hideControls, pageTitle } from "@/stores/app";
    import { resetConfirmation } from "@/stores/confirmation";
    import { setErrors } from "@/stores/errors";
    import { superuser } from "@/stores/superuser";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import Router, { link, replace } from "svelte-spa-router";
    import active from "svelte-spa-router/active";
    import routes from "./routes";
    import { onMount } from "svelte";

    let oldLocation = undefined;

    let showAppSidebar = false;

    // theme
    const THEME_KEY = "pb_ui_theme";
    let isDark = false;

    function applyTheme(dark) {
        isDark = !!dark;
        try {
            const root = document.documentElement;
            // DaisyUI prefers data-theme
            root.setAttribute("data-theme", isDark ? "dark" : "light");
            // Keep the legacy .dark class for existing styles
            root.classList.toggle("dark", isDark);
        } catch (err) {
            // ignore in non-browser environments
        }
    }

    function loadTheme() {
        // priority: localStorage -> prefers-color-scheme -> default light
        const stored = window.localStorage?.getItem(THEME_KEY);
        if (stored === "dark" || stored === "light") {
            applyTheme(stored === "dark");
            return;
        }

        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        applyTheme(prefersDark);
    }

    function toggleTheme() {
        applyTheme(!isDark);
        window.localStorage?.setItem(THEME_KEY, isDark ? "dark" : "light");
    }

    let isTinyMCEPreloaded = false;

    $: if ($superuser?.id) {
        loadSettings();
    }

    function handleRouteLoading(e) {
        if (e?.detail?.location === oldLocation) {
            return; // not an actual change
        }

        showAppSidebar = !!e?.detail?.userData?.showAppSidebar;

        oldLocation = e?.detail?.location;

        // resets
        $pageTitle = "";
        setErrors({});
        resetConfirmation();
    }

    function handleRouteFailure() {
        replace("/");
    }

    async function loadSettings() {
        if (!$superuser?.id) {
            return;
        }

        try {
            const settings = await ApiClient.settings.getAll({
                $cancelKey: "initialAppSettings",
            });
            $appName = settings?.meta?.appName || "";
            $hideControls = !!settings?.meta?.hideControls;
        } catch (err) {
            if (!err?.isAbort) {
                console.warn("Failed to load app settings.", err);
            }
        }
    }

    onMount(() => {
        // initialize UI theme
        loadTheme();
    });

    function logout() {
        ApiClient.logout();
    }
</script>

<svelte:head>
    <title>{CommonHelper.joinNonEmpty([$pageTitle, $appName, "PocketBase"], " - ", false)}</title>

    {#if window.location.protocol == "https:"}
        <link
            rel="shortcut icon"
            type="image/png"
            href="{import.meta.env.BASE_URL}images/favicon/favicon_prod.png"
        />
    {/if}
</svelte:head>

<div class="app-layout">
    {#if $superuser?.id && showAppSidebar}
        <aside class="app-sidebar">
            <a href="/" class="logo logo-sm" use:link>
                <img
                    src="{import.meta.env.BASE_URL}images/logo.svg"
                    alt="PocketBase logo"
                    width="40"
                    height="40"
                />
            </a>

            <nav class="main-menu">
                <a
                    href="/collections"
                    class="menu-item"
                    aria-label="Collections"
                    use:link
                    use:active={{ path: "/collections/?.*", className: "current-route" }}
                    use:tooltip={{ text: "Collections", position: "right" }}
                >
                    <i class="ri-database-2-line"></i>
                </a>
                <a
                    href="/logs"
                    class="menu-item"
                    aria-label="Logs"
                    use:link
                    use:active={{ path: "/logs/?.*", className: "current-route" }}
                    use:tooltip={{ text: "Logs", position: "right" }}
                >
                    <i class="ri-line-chart-line"></i>
                </a>
                <a
                    href="/settings"
                    class="menu-item"
                    aria-label="Settings"
                    use:link
                    use:active={{ path: "/settings/?.*", className: "current-route" }}
                    use:tooltip={{ text: "Settings", position: "right" }}
                >
                    <i class="ri-tools-line"></i>
                </a>
            </nav>

            <div
                tabindex="0"
                role="button"
                aria-label="Logged superuser menu"
                class="thumb thumb-circle link-hint"
                title={$superuser.email}
            >
                <span class="initials">{CommonHelper.getInitials($superuser.email)}</span>
                <Toggler class="dropdown dropdown-nowrap dropdown-upside dropdown-left">
                    <div class="txt-ellipsis current-superuser" title={$superuser.email}>
                        {$superuser.email}
                    </div>
                    <hr />
                    <a
                        href="/collections?collection=_superusers"
                        class="dropdown-item closable"
                        role="menuitem"
                        use:link
                    >
                        <i class="ri-shield-user-line" aria-hidden="true"></i>
                        <span class="txt">Manage superusers</span>
                    </a>
                    <button type="button" class="dropdown-item closable" role="menuitem" onclick={logout}>
                        <i class="ri-logout-circle-line" aria-hidden="true"></i>
                        <span class="txt">Logout</span>
                    </button>
                </Toggler>
            </div>

            <!-- theme toggle button -->
            <button
                class="btn btn-transparent btn-sm m-t-10"
                aria-pressed={isDark}
                title="Toggle dark theme"
                onclick={toggleTheme}
            >
                {#if isDark}
                    <i class="ri-sun-line" aria-hidden="true"></i>
                {:else}
                    <i class="ri-moon-line" aria-hidden="true"></i>
                {/if}
            </button>
        </aside>
    {/if}

    <div class="app-body">
        <Router {routes} on:routeLoading={handleRouteLoading} on:conditionsFailed={handleRouteFailure} />

        <Toasts />
    </div>
</div>

<Confirmation />

{#if showAppSidebar && !isTinyMCEPreloaded}
    <div class="tinymce-preloader hidden">
        <TinyMCE
            conf={CommonHelper.defaultEditorOptions()}
            on:init={() => {
                isTinyMCEPreloaded = true;
            }}
        />
    </div>
{/if}

<style>
    .current-superuser {
        padding: 10px;
        max-width: 200px;
        color: var(--txtHintColor);
    }
</style>
