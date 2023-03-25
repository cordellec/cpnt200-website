<script>
	export let data;
</script>

<h1>Players Id</h1>
<section>
	<div class="albumitems">
		{#if data.albums}
			<p>ID: {data.albums.id}</p>
		{:else}
			<h3>Id Not Found</h3>
		{/if}
	</div>
</section>

<style>
	h1,
	p {
		display: flex;
		justify-content: center;
		color: #ffc812;
	}

	section {
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
