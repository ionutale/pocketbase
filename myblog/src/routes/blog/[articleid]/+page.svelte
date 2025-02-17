<script>
	let { data } = $props();
  const article = data;
  console.log(article);

</script>

<section class="article-body">
  {@html article.body}
</section>

<style>
  @import './article-page.css'; /* Import the CSS file */

</style>