<script>
    import { querystring } from "@/lib/router";
    import { pageTitle } from "@/stores/app";
    import CommonHelper from "@/utils/CommonHelper";
    import tooltip from "@/actions/tooltip";
    import Field from "@/components/base/Field.svelte";
    import PageWrapper from "@/components/base/PageWrapper.svelte";
    import Searchbar from "@/components/base/Searchbar.svelte";
    import RefreshButton from "@/components/base/RefreshButton.svelte";
    import LogsList from "@/components/logs/LogsList.svelte";
    import LogsChart from "@/components/logs/LogsChart.svelte";
    import LogViewPanel from "@/components/logs/LogViewPanel.svelte";
    import LogsSettingsPanel from "@/components/logs/LogsSettingsPanel.svelte";
    import LogsLevelsInfo from "@/components/logs/LogsLevelsInfo.svelte";

    // Page title
    $pageTitle = "Logs";

    // Constants
    const LOG_QUERY_KEY = "logId";
    const ADMIN_REQUESTS_QUERY_KEY = "superuserRequests";
    const ADMIN_REQUESTS_STORAGE_KEY = "superuserLogRequests";

    // Initial query params snapshot
    const initialQueryParams = new URLSearchParams($querystring);

    // State (runes)
    let refreshKey = $state(1);
    let filter = $state(initialQueryParams.get("filter") || "");
    let zoom = $state({});
    let withSuperuserLogs = $state(
        (initialQueryParams.get(ADMIN_REQUESTS_QUERY_KEY) ??
            window.localStorage?.getItem(ADMIN_REQUESTS_STORAGE_KEY) ?? 0) << 0
    );

    // Element refs as state so effects track them
    let logViewPanel = $state();
    let logsSettingsPanel = $state();

    // Derived
    let presets = $derived(!withSuperuserLogs ? 'data.auth!="_superusers"' : "");

    // Show a log panel if there is an initial log id
    $effect(() => {
        const initialId = initialQueryParams.get(LOG_QUERY_KEY);
        if (initialId && logViewPanel) {
            logViewPanel.show(initialId);
        }
    });

    // Persist and reflect superuser filter changes in the URL
    $effect(() => {
        window.localStorage?.setItem(
            ADMIN_REQUESTS_STORAGE_KEY,
            withSuperuserLogs << 0
        );
        updateQueryParams();
    });

    // Reflect filter changes in the URL
    $effect(() => {
        // ensure undefined doesn't appear
        updateQueryParams();
    });

    function refresh() {
        refreshKey++;
    }

    function updateQueryParams(extra = {}) {
        const queryParams = {};
        queryParams.filter = filter || null;
        queryParams[ADMIN_REQUESTS_QUERY_KEY] = withSuperuserLogs << 0 || null;
        CommonHelper.replaceHashQueryParams(Object.assign(queryParams, extra));
    }
</script>

<PageWrapper>
    <div class="page-header-wrapper m-b-0">
        <header class="page-header">
            <nav class="breadcrumbs">
                <div class="breadcrumb-item">{$pageTitle}</div>
            </nav>

            <button
                type="button"
                aria-label="Logs settings"
                class="btn btn-transparent btn-circle"
                use:tooltip={{ text: "Logs settings", position: "right" }}
                on:click={() => logsSettingsPanel?.show()}
            >
                <i class="ri-settings-4-line"></i>
            </button>

            <RefreshButton on:refresh={() => refresh()} />

            <div class="flex-fill"></div>

            <div class="inline-flex">
                <Field class="form-field form-field-toggle m-0" let:uniqueId>
                    <input type="checkbox" id={uniqueId} bind:checked={withSuperuserLogs} />
                    <label for={uniqueId}>Include requests by superusers</label>
                </Field>
            </div>
        </header>

        <Searchbar
            value={filter}
            placeholder="Search term or filter like `level > 0 && data.auth = 'guest'`"
            extraAutocompleteKeys={["level", "message", "data."]}
            on:submit={(e) => (filter = e.detail)}
        />
        <LogsLevelsInfo class="block txt-sm txt-hint m-t-xs m-b-base" />

        {#key refreshKey}
            <LogsChart bind:zoom {filter} {presets} />
        {/key}
    </div>

    {#key refreshKey}
        <LogsList bind:filter bind:zoom {presets} on:select={(e) => logViewPanel?.show(e?.detail)} />
    {/key}
</PageWrapper>

<LogViewPanel
    bind:this={logViewPanel}
    on:show={(e) => {
        let query = {};
        query[LOG_QUERY_KEY] = e.detail?.id || null;
        CommonHelper.replaceHashQueryParams(query);
    }}
    on:hide={() => {
        let query = {};
        query[LOG_QUERY_KEY] = null;
        CommonHelper.replaceHashQueryParams(query);
    }}
/>

<LogsSettingsPanel bind:this={logsSettingsPanel} on:save={refresh} />
