<svelte:options runes />
<script>
    import { onMount } from "svelte";
    import CommonHelper from "@/utils/CommonHelper";
    import tooltipAction from "@/actions/tooltip";

    let value = "";
    let tooltip = "Copy";
    let idleClasses = "ri-file-copy-line txt-sm link-hint";
    let successClasses = "ri-check-line txt-sm txt-success";
    let successDuration = 500; // ms

    let copyTimeout = $state(undefined);

    function copy() {
        if (CommonHelper.isEmpty(value)) {
            return;
        }

        CommonHelper.copyToClipboard(value);

        clearTimeout(copyTimeout);
        copyTimeout = setTimeout(() => {
            clearTimeout(copyTimeout);
            copyTimeout = null;
        }, successDuration);
    }

    onMount(() => {
        return () => {
            if (copyTimeout) {
                clearTimeout(copyTimeout);
            }
        };
    });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<i
    tabindex="-1"
    role="button"
    class={copyTimeout ? successClasses : idleClasses}
    aria-label={"Copy to clipboard"}
    use:tooltipAction={!copyTimeout ? tooltip : undefined}
    on:click|stopPropagation={copy}
></i>
