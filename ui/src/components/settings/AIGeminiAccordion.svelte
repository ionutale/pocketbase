<script>
    import Accordion from "@/components/base/Accordion.svelte";
    import Field from "@/components/base/Field.svelte";
    import RedactedPasswordInput from "@/components/base/RedactedPasswordInput.svelte";
    import tooltip from "@/actions/tooltip";
    import { errors } from "@/stores/errors";
    import CommonHelper from "@/utils/CommonHelper";

    export let formSettings;

    $: hasErrors = !CommonHelper.isEmpty($errors?.ai?.gemini);
</script>

<Accordion single>
    <svelte:fragment slot="header">
        <div class="inline-flex">
            <i class="ri-sparkling-2-line"></i>
            <span class="txt">AI · Gemini</span>
        </div>

        <div class="flex-fill" />

        {#if hasErrors}
            <i
                class="ri-error-warning-fill txt-danger"
                use:tooltip={{ text: "Has errors", position: "left" }}
            />
        {/if}
    </svelte:fragment>

    <div class="grid">
        <div class="col-lg-6">
            <Field class="form-field" name="ai.gemini.model" let:uniqueId>
                <label for={uniqueId}>
                    <span class="txt">Model</span>
                    <i
                        class="ri-information-line link-hint"
                        use:tooltip={{
                            text: 'Imagen model id, e.g. "imagen-3.0-generate-002".',
                            position: "right",
                        }}
                    />
                </label>
                <input
                    id={uniqueId}
                    type="text"
                    placeholder="imagen-3.0-generate-002"
                    bind:value={formSettings.ai.gemini.model}
                />
            </Field>
        </div>

        <div class="col-lg-6">
            <Field class="form-field" name="ai.gemini.apiBase" let:uniqueId>
                <label for={uniqueId}>
                    <span class="txt">API base URL</span>
                    <i
                        class="ri-information-line link-hint"
                        use:tooltip={{
                            text: 'Override Gemini API base if needed. Leave blank for https://generativelanguage.googleapis.com',
                            position: "right",
                        }}
                    />
                </label>
                <input
                    id={uniqueId}
                    type="text"
                    placeholder="https://generativelanguage.googleapis.com"
                    bind:value={formSettings.ai.gemini.apiBase}
                />
            </Field>
        </div>

        <div class="col-lg-12">
            <Field class="form-field" name="ai.gemini.apiKey" let:uniqueId>
                <label for={uniqueId}>
                    <span class="txt">API key</span>
                    <i
                        class="ri-information-line link-hint"
                        use:tooltip={{
                            text: 'If left blank, the server will use the GEMINI_API_KEY env var.',
                            position: "right",
                        }}
                    />
                </label>
                <RedactedPasswordInput
                    id={uniqueId}
                    bind:value={formSettings.ai.gemini.apiKey}
                />
            </Field>
        </div>
    </div>
</Accordion>
