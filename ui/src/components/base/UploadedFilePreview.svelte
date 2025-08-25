<script>
    import CommonHelper from "@/utils/CommonHelper";

    export let file; // File() instance
    export let size = 50; // preview thumb size (if file is image)

    $effect(() => { if (typeof file !== "undefined") {
        loadPreviewUrl();
    }

    let previewUrl = $derived("");

    function loadPreviewUrl() {
        if (CommonHelper.hasImageExtension(file?.name)) {
            CommonHelper.generateThumb(file, size, size)
                .then((url) => {
                    previewUrl = url;
                })
                .catch((err) => {
                    previewUrl = "";
                    console.warn("Unable to generate thumb: ", err);
                });
        } else {
            previewUrl = "";
        }
    }
</script>

{#if previewUrl}
    <img draggable={false} src={previewUrl} width={size} height={size} alt={file.name} />
{:else}
    <i class="ri-file-line" alt={file.name}></i>
{/if}
