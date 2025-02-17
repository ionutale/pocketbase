<script>
	import ArticleCard from '$lib/components/ArticleCard.svelte';

	let { data } = $props();
	console.log('amount of data', data);

</script>

<h1>Blog</h1>

{#each data.items as article}
	<ArticleCard {...article} />
{/each}
