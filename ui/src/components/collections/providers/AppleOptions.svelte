<svelte:options runes />
<script>
    import AppleSecretPopup from "@/components/collections/providers/AppleSecretPopup.svelte";

    let key = "";
    let config = {};

    let generatorPopup = $state(undefined);
</script>

<button
    type="button"
    class="btn btn-sm btn-secondary btn-provider-{key}"
    aria-label="Generate Apple secret"
    on:click={() => generatorPopup?.show({ clientId: config.clientId })}
>
    <i class="ri-key-line"></i>
    <span class="txt">Generate secret</span>
</button>

<AppleSecretPopup
    bind:this={generatorPopup}
    on:submit={(e) => {
        config.clientSecret = e.detail?.secret || "";
    }}
/>
