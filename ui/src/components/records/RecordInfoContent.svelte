<svelte:options runes />
<script>
    import CommonHelper from "@/utils/CommonHelper";
    import RecordFileThumb from "@/components/records/RecordFileThumb.svelte";
    import RecordInfoContent from "@/components/records/RecordInfoContent.svelte";
    import GeoPointValue from "@/components/records/fields/GeoPointValue.svelte";
    import { collections } from "@/stores/collections";

    let record;

    let fileDisplayFields = $state([]);
    let nonFileDisplayFields = $state([]);

    let collection = $derived($collections?.find((item) => item.id == record?.collectionId));

    $effect(() => { if (collection) {
        loadDisplayFields();
    }

    function loadDisplayFields() {
        const fields = collection?.fields || [];

        fileDisplayFields = fields.filter((f) => !f.hidden && f.presentable && f.type == "file");
        nonFileDisplayFields = fields.filter((f) => !f.hidden && f.presentable && f.type != "file");

        // fallback to the first single file field that accept images
        // if no presentable field is available
        if (!fileDisplayFields.length && !nonFileDisplayFields.length) {
            const fallbackFileField = fields.find((f) => {
                return (
                    !f.hidden &&
                    f.type == "file" &&
                    f.maxSelect == 1 &&
                    f.mimeTypes?.find((t) => t.startsWith("image/"))
                );
            });
            if (fallbackFileField) {
                fileDisplayFields.push(fallbackFileField);
            }
        }
    }
</script>

{#each fileDisplayFields as field}
    {@const filenames = CommonHelper.toArray(record[field.name]).slice(0, 5)}
    {#each filenames as filename}
        {#if !CommonHelper.isEmpty(filename)}
            <RecordFileThumb {record} {filename} size="xs" />
        {/if}
    {/each}
{/each}

{#each nonFileDisplayFields as field, i}
    {#if i > 0},{/if}

    {#if field.type == "relation" && record.expand?.[field.name]}
        <RecordInfoContent bind:record={record.expand[field.name]} />
    {:else if field.type == "geoPoint"}
        <GeoPointValue value={record[field.name]} />
    {:else}
        {CommonHelper.truncate(CommonHelper.displayValue(record, [field.name]), 70)}
    {/if}
{:else}
    {CommonHelper.truncate(CommonHelper.displayValue(record, []), 70)}
{/each}
