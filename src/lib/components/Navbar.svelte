<script>
  let links = [
    { name: 'Home', url: '/' },
    { name: 'Achievements', url: '/achievements' },
    { name: 'Assignments', url: '/assignments' },
  ];
</script>

<nav class="navbar">
  <a href="/" class="nav-item">CPNT 200</a>
  <div>
    {#each links as link}
      <a href="{link.url}" class="nav-item">{link.name}</a>
    {/each}
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    background-color: #000000;
    padding: 1rem;
    font-family:Georgia, 'Times New Roman', Times, serif
  }
  .nav-item {
    color: #FFC812;
    text-decoration: none;
    margin-left: 1rem;
    font-family: 'lora', serif;
    font-weight: 500;
  }
  .nav-item:hover {
    color: #41c82a;

  }
</style>