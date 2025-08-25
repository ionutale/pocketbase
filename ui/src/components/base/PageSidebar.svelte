<svelte:options runes />
<script>
    import CommonHelper from "@/utils/CommonHelper";
    import Dragline from "@/components/base/Dragline.svelte";

    const widthStorageKey = "@superuserSidebarWidth";

    let classes = $state("");
    export { classes as class }; // export reserved keyword

    let sidebarElem = $state(undefined);
    let initialSidebarWidth = $state(undefined);
    let sidebarWidth = $state(localStorage.getItem(widthStorageKey) || null);

    $effect(() => { if (sidebarWidth && sidebarElem) {
        sidebarElem.style.width = sidebarWidth;
        localStorage.setItem(widthStorageKey, sidebarWidth);
    }
</script>

<aside bind:this={sidebarElem} class="page-sidebar {classes}">
    <slot />
</aside>

<Dragline
    on:dragstart={() => {
        initialSidebarWidth = sidebarElem.offsetWidth;
    }}
    on:dragging={(e) => {
        sidebarWidth = initialSidebarWidth + e.detail.diffX + "px";
    }}
    on:dragstop={() => {
        CommonHelper.triggerResize();
    }}
/>
