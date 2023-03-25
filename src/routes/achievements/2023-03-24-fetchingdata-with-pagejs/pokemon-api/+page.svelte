<script>
	export let data;
</script>

<h1>My Favourite Pokemon</h1>
<li>
	{#each data.pokemons as pokemon}
		<div class="divcard">
			<h1>{pokemon.name}</h1>
			<h2>{pokemon.url}</h2>
		</div>
	{/each}
</li>

<style>
	h1,
	h2 {
		display: flex;
		justify-content: center;
		color: #ffc812;
	}

	li {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.divcard {
		border: #ffc812 2px solid;
		border-radius: 20px;
		margin: 2rem;
		padding: 20px;
	}

	.divcard:hover {
		transform: scale(1.1);
		background-color: #8b6d0891;
	}
</style>
