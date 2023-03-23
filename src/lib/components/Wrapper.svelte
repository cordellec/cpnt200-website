<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<div class="wrapper">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #262626;
  }
  
  .wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  :global(main) {
    flex-grow: 1;
  }
</style>