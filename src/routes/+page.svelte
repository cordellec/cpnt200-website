<div class="container">
	<div class="card">
		<img src="/download.png" alt="Card Image" />
		<div class="card-content">
			<h2>Welcome to my new CPNT Webpage</h2>
			<p>I am in the process of updating it, so if it's buggy, you now know why lol</p>
			<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Button That Goes Nowhere</a>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		margin: 2rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		width: 300px;
		height: 400px;
		background-color: #383838;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	.card-content {
		padding: 20px;
	}

	h2 {
		font-size: 1.5rem;
		margin-bottom: 10px;
		color: #ffc812;
	}

	p {
		font-size: 1rem;
		margin-bottom: 20px;
		color: #ffc812;
	}

	a {
		display: inline-block;
		font-size: 1rem;
		color: #ffc812;
		background-color: #0077cc;
		padding: 10px 20px;
		border-radius: 4px;
		text-decoration: none;
		transition: background-color 0.2s ease-in-out;
	}

	a:hover {
		background-color: #005ea6;
	}
</style>
