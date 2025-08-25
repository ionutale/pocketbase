<!-- 
Demo component showcasing Svelte 5 runes usage
This demonstrates the key runes: $state, $derived, $effect, and $props
-->
<script>
    // $state rune for reactive state
    let count = $state(0);
    let name = $state("Svelte 5");
    let items = $state([]);

    // $derived rune for computed values (replaces reactive statements)
    let doubled = $derived(count * 2);
    let greeting = $derived(`Hello, ${name}!`);
    let itemsCount = $derived(items.length);

    // $props rune for component props
    let { title = "Runes Demo", maxCount = 10 } = $props();

    // $effect rune for side effects (replaces reactive statements with side effects)
    $effect(() => {
        console.log(`Count changed to: ${count}`);
        
        // Update document title
        if (typeof document !== 'undefined') {
            document.title = `${title} - Count: ${count}`;
        }
    });

    // Another effect with cleanup
    $effect(() => {
        const interval = setInterval(() => {
            if (count < maxCount) {
                items = [...items, `Item ${items.length + 1}`];
            }
        }, 2000);

        // Cleanup function
        return () => {
            clearInterval(interval);
        };
    });

    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }

    function reset() {
        count = 0;
        items = [];
        name = "Svelte 5";
    }

    function addItem() {
        items = [...items, `Manual item ${items.length + 1}`];
    }

    function removeItem(index) {
        items = items.filter((_, i) => i !== index);
    }
</script>

<div class="runes-demo p-4 m-4 border border-gray-300 rounded">
    <h2 class="txt-2xl m-b-base">{title}</h2>
    
    <div class="demo-section m-b-base">
        <h3 class="txt-lg m-b-sm">$state() - Reactive State</h3>
        <div class="form-field">
            <label>Name:</label>
            <input type="text" bind:value={name} placeholder="Enter your name" />
        </div>
        <div class="form-field">
            <label>Count: {count}</label>
            <div>
                <button type="button" class="btn btn-sm" onclick={decrement}>-</button>
                <button type="button" class="btn btn-sm m-l-xs" onclick={increment}>+</button>
                <button type="button" class="btn btn-sm btn-secondary m-l-xs" onclick={reset}>Reset</button>
            </div>
        </div>
    </div>

    <div class="demo-section m-b-base">
        <h3 class="txt-lg m-b-sm">$derived() - Computed Values</h3>
        <ul>
            <li>Greeting: <strong>{greeting}</strong></li>
            <li>Doubled Count: <strong>{doubled}</strong></li>
            <li>Items Count: <strong>{itemsCount}</strong></li>
        </ul>
    </div>

    <div class="demo-section m-b-base">
        <h3 class="txt-lg m-b-sm">$effect() - Side Effects</h3>
        <p>Check the browser console and document title for effect demonstrations.</p>
        <p>Items are automatically added every 2 seconds (up to {maxCount}):</p>
        
        <button type="button" class="btn btn-sm btn-secondary m-b-xs" onclick={addItem}>
            Add Manual Item
        </button>
        
        {#if items.length > 0}
            <ul class="list">
                {#each items as item, index}
                    <li class="list-item">
                        {item}
                        <button 
                            type="button" 
                            class="btn btn-xs btn-danger m-l-xs" 
                            onclick={() => removeItem(index)}
                            aria-label="Remove {item}"
                        >
                            ×
                        </button>
                    </li>
                {/each}
            </ul>
        {:else}
            <p class="txt-hint">No items yet. They will be added automatically or click "Add Manual Item".</p>
        {/if}
    </div>

    <div class="demo-section">
        <h3 class="txt-lg m-b-sm">Summary</h3>
        <div class="content">
            <p>This component demonstrates:</p>
            <ul>
                <li><code>$state()</code> - for reactive variables (name, count, items)</li>
                <li><code>$derived()</code> - for computed values (greeting, doubled, itemsCount)</li>
                <li><code>$effect()</code> - for side effects with automatic cleanup</li>
                <li><code>$props()</code> - for component props with defaults</li>
            </ul>
        </div>
    </div>
</div>

<style>
    .runes-demo {
        background: var(--baseColor);
        border: 1px solid var(--baseAlt1Color);
        border-radius: var(--baseRadiusSmall);
    }
    
    .demo-section {
        padding: 1rem 0;
        border-bottom: 1px solid var(--baseAlt1Color);
    }
    
    .demo-section:last-child {
        border-bottom: none;
    }
    
    .list {
        max-height: 200px;
        overflow-y: auto;
        border: 1px solid var(--baseAlt1Color);
        border-radius: var(--baseRadiusSmall);
        padding: 0.5rem;
    }
    
    .list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.25rem 0;
        border-bottom: 1px solid var(--baseAlt1Color);
    }
    
    .list-item:last-child {
        border-bottom: none;
    }
</style>