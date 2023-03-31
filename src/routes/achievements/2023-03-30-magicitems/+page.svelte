<script>
  export let data;
  console.log(data)
</script>

<h1>Coutnries</h1>
{#if data.magicItems. length >0 }
<ul>
  {#each data.magicItems as item}
  <li><a href="/2023-03-30-magicitems/{item.id}">{item.name}</a></li>
  {/each}
</ul>

{:else}

<p>No items found</p>

{/if}