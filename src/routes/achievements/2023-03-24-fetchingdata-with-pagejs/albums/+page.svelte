<script>
	export let data;
</script>

<h1>Albums</h1>

<li>
	{#each data.albums as album}
		<div class="albumitems">
			<h3>User ID: {album.userId}</h3>
			<h3>ID: {album.id}</h3>
			<h3>Title: {album.title}</h3>
		</div>
	{/each}
</li>

<style>
	h1 {
		display: flex;
		justify-content: center;
		color: #ffc812;
	}

	h2,
	h3 {
		display: flex;
		justify-content: row;
		color: #ffc812;
	}

	li {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.albumitems {
		border: #ffc812 2px solid;
		border-radius: 20px;
		margin: 2rem;
		padding: 20px;
	}

	.albumitems:hover {
		transform: scale(1.1);
		background-color: #8b6d0891;
	}
</style>
