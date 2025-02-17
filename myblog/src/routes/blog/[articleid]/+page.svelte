<script>

	let { data } = $props();
  const article = data;
  console.log(article);
</script>

<h2>Article {article.id}</h2>

<section class="article-body">
  {@html article.body}
</section>

<style>
  .article-body {
    margin-top: 20px;
  }

</style>