<header>
  <div>
    ion utale
  </div>
  <menu>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/blog">Blog</a>
  </menu>
</header>

<slot></slot>

<footer>
  &copy; 2025 ion utale
</footer>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
  }

  menu {
    display: flex;
    gap: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  footer {
    padding: 1rem;
    background-color: #333;
    color: white;
    text-align: center;
  }
</style>