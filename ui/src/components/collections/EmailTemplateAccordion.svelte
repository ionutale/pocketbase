<svelte:options runes />
<script context="module">
    let cachedEditorComponent = $state(undefined);
</script>

<script>
    import tooltip from "@/actions/tooltip";
    import Accordion from "@/components/base/Accordion.svelte";
    import Field from "@/components/base/Field.svelte";
    import { errors, removeError } from "@/stores/errors";
    import { addInfoToast } from "@/stores/toasts";
    import CommonHelper from "@/utils/CommonHelper";
    import { scale } from "svelte/transition";

    let key;
    let title;
    let config = {};
    let placeholders = [];

    let accordion = $state(undefined);
    let editorComponent = $state(cachedEditorComponent);
    let isEditorComponentLoading = $state(false);

    let hasErrors = $derived(!CommonHelper.isEmpty(CommonHelper.getNestedVal($errors, key)));

    $effect(() => { if (!config.enabled) {
        removeError(key);
    }

    export function expand() {
        accordion?.expand();
    }

    export function collapse() {
        accordion?.collapse();
    }

    export function collapseSiblings() {
        accordion?.collapseSiblings();
    }

    async function loadEditorComponent() {
        if (editorComponent || isEditorComponentLoading) {
            return; // already loaded or in the process
        }

        isEditorComponentLoading = true;

        editorComponent = (await import("@/components/base/CodeEditor.svelte")).default;

        cachedEditorComponent = editorComponent;

        isEditorComponentLoading = false;
    }

    function copy(param) {
        param = param.replace("*", ""); // strip wildcard
        CommonHelper.copyToClipboard(param);
        addInfoToast(`Copied ${param} to clipboard`, 2000);
    }

    loadEditorComponent();
</script>

<Accordion bind:this={accordion} on:expand on:collapse on:toggle {...$$restProps}>
    <svelte:fragment slot="header">
        <div class="inline-flex">
            <i class="ri-draft-line"></i>
            <span class="txt">{title}</span>
        </div>

        <div class="flex-fill"></div>

        {#if hasErrors}
            <i
                class="ri-error-warning-fill txt-danger"
                transition:scale={{ duration: 150, start: 0.7 }}
                use:tooltip={{ text: "Has errors", position: "left" }}
            ></i>
        {/if}
    </svelte:fragment>

    <Field class="form-field required" name="{key}.subject" let:uniqueId>
        <label for={uniqueId}>Subject</label>
        <input type="text" id={uniqueId} bind:value={config.subject} spellcheck="false" required />
        {#if placeholders?.length > 0}
            <div class="help-block">
                Available placeholder parameters:
                {#each placeholders as placeholder}
                    <button
                        type="button"
                        class="label label-sm link-primary txt-mono"
                        on:click={() => copy("{" + placeholder + "}")}
                    >
                        {"{" + placeholder + "}"}
                    </button>&nbsp;
                {/each}
            </div>
        {/if}
    </Field>

    <Field class="form-field m-0 required" name="{key}.body" let:uniqueId>
        <label for={uniqueId}>Body (HTML)</label>

        {#if editorComponent && !isEditorComponentLoading}
            <svelte:component this={editorComponent} id={uniqueId} language="html" bind:value={config.body} />
        {:else}
            <textarea
                id={uniqueId}
                class="txt-mono"
                spellcheck="false"
                rows="14"
                required
                bind:value={config.body}
            ></textarea>
        {/if}

        {#if placeholders?.length > 0}
            <div class="help-block">
                Available placeholder parameters:
                {#each placeholders as placeholder}
                    <button
                        type="button"
                        class="label label-sm link-primary txt-mono"
                        on:click={() => copy("{" + placeholder + "}")}
                    >
                        {"{" + placeholder + "}"}
                    </button>&nbsp;
                {/each}
            </div>
        {/if}
    </Field>
</Accordion>
