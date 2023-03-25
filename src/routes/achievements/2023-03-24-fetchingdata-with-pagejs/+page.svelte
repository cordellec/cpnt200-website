<script>
  export let data;
</script>

<h1>Disney Characters</h1>


<ul>
  {#each data.characters as character}
    <li>
      <a href={`https://api.disneyapi.dev/characters/${character._id}`}>
        <img class="character-image" src={character.imageUrl} alt={character.name}>
        <h3 style="text-decoration: none;">{character.name}</h3>
      </a>
    </li>
  {/each}
</ul>

<style>
  h1, h2, h3 {
    color: #FFC812;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    background-color: #383838;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    max-height: 500px;
    overflow: hidden;
  }

  .character-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    margin: 0.5rem 0 0;
  }
</style>
