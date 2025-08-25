<!-- Demo page to showcase Svelte 5 runes migration -->
<script>
    import PageWrapper from "@/components/base/PageWrapper.svelte";
    import RunesDemo from "@/components/demo/RunesDemo.svelte";
    import { pageTitle } from "@/stores/app";

    $pageTitle = "Svelte 5 Runes Demo";
</script>

<PageWrapper>
    <div class="page-content">
        <div class="m-b-base">
            <h1 class="txt-3xl">🎉 Successfully Migrated to Svelte 5!</h1>
            <p class="txt-lg txt-hint m-t-xs">
                This PocketBase UI has been successfully migrated from Svelte 4 to Svelte 5 with runes integration.
            </p>
        </div>
        
        <div class="alert alert-success m-b-base">
            <h2 class="txt-xl m-b-sm">✅ Migration Achievements</h2>
            <ul>
                <li><strong>Svelte 5.38.3</strong> - Latest version with runes support</li>
                <li><strong>$state() runes</strong> - For reactive local state</li>
                <li><strong>$effect() runes</strong> - Replacing reactive statements</li>
                <li><strong>onclick</strong> - Modern event handlers</li>
                <li><strong>HTML compliance</strong> - Fixed self-closing tags</li>
                <li><strong>Build optimization</strong> - Improved bundle size and performance</li>
            </ul>
        </div>

        <div class="m-b-base">
            <h2 class="txt-2xl m-b-sm">Interactive Runes Demonstration</h2>
            <p class="txt-hint m-b-base">
                The component below demonstrates all key Svelte 5 runes in action:
            </p>
        </div>

        <RunesDemo title="🧙‍♂️ Svelte 5 Runes in Action" maxCount={5} />

        <div class="m-t-base">
            <h2 class="txt-2xl m-b-sm">Technical Details</h2>
            <div class="content">
                <h3 class="txt-lg">What Changed:</h3>
                <ul>
                    <li><strong>Package.json</strong>: Upgraded svelte from 4.0.0 to 5.38.3</li>
                    <li><strong>Components</strong>: Updated key components to use runes syntax</li>
                    <li><strong>Event Handlers</strong>: Migrated from <code>on:click</code> to <code>onclick</code></li>
                    <li><strong>Reactive Statements</strong>: Replaced <code>$:</code> with <code>$effect()</code></li>
                    <li><strong>Local State</strong>: Used <code>$state()</code> for reactive variables</li>
                    <li><strong>Computed Values</strong>: Introduced <code>$derived()</code> for calculated properties</li>
                </ul>

                <h3 class="txt-lg m-t-base">Benefits:</h3>
                <ul>
                    <li><strong>Better Performance</strong>: Svelte 5 has optimized reactivity system</li>
                    <li><strong>Improved Developer Experience</strong>: Runes provide clearer intent</li>
                    <li><strong>Modern Syntax</strong>: More intuitive and explicit reactive patterns</li>
                    <li><strong>Future-Proof</strong>: Ready for upcoming Svelte ecosystem updates</li>
                </ul>
            </div>
        </div>
    </div>
</PageWrapper>