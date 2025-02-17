<script>

  /**
   * @typedef {Object} tag
   * @property {string} name
  */

  /**
   * @typedef {Object} expand
   * @property {tag[]} tags
   */

  /**
  * @typedef {Object} CardData
  * @property {string} id The unique identifier of the card.
  * @property {string} title The title of the card.
  * @property {string} body The body text of the card.
  * @property {string} cover_image The URL of the card's cover image.
  * @property {string} author The author of the card.
  * @property {string} published_at The date the card was published.
  * @property {string} css The CSS class to apply to the card.
  * @property {expand} expand The tags of the card.
  */

  /** @type {CardData} */
  const cardData = $props();
  console.log(cardData.title);
</script>


<article class="card">
  <img src={cardData.cover_image}
    alt={cardData.title}
    class="card-image">
  <div class="card-content">
    <h2 class="card-title">{cardData.title}</h2>
    <p class="card-description">{@html cardData.body.substring(0, 100)}...</p>
    {#if cardData.expand.tags}
      <ul>
        {#each cardData.expand.tags as tag}
          <li class="card-tags">{tag.name}</li>
        {/each}
      </ul>
    {/if}
    <a href={`/blog/${cardData.id}`} class="card-link">Read More</a>
  </div>
</article>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  overflow: hidden; /* Prevents image overflow */
  margin-bottom: 20px; /* Spacing between cards */
  max-width: 300px; /* Adjust as needed */
}

.card-image {
  width: 100%;
  display: block; /* Prevents image from creating extra space */
  object-fit: cover; /* Ensures image covers the area */
  height: 200px; /* Adjust as needed */
}

.card-content {
  padding: 20px;
}

.card-title {
  margin-bottom: 10px;
}

.card-description {
  margin-bottom: 15px;
}

.card-link {
  display: inline-block;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.card-link:visited {
  color: white;
}

.card-link:hover {
  background-color: #0056b3;
}

.card-tags {
  display: inline-block;
  padding: 5px 10px;
  background-color: #f0f0f0;
  color: #333;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
}

.card-tags:hover {
  background-color: #e0e0e0;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

ul li {
  display: inline;
}
</style>