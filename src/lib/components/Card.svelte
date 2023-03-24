<script>
  //importing from pokemon.js //
  
  import { pokemon } from './pokemons';

 // Created a function called "pokemonCards" that targets the "pokemon" array. 
 // Than used the map() function to loop through each object in the array of objects.
 // Than created an object that i use to fill in my card below.
  const pokemonCards = pokemon.map(poke => {
    return {
      name: poke.name,
      element: poke.element,
      power: poke.power,
      damage: poke.damage,
      attack: poke.attack,
      health: poke.health,
      imageSrc: poke.imageSrc,
      externalUrl: poke.externalUrl,
    };
  });
</script>

<!-- Made this container that uses a flex box to center the cards -->
<div class="container">
  <!-- Created an #each loop that will loop through "pokemonCards" and it targets each poke variable that i assigned in the object-->
{#each pokemonCards as poke}
<a class="card-link" href="{poke.externalUrl}" target="_blank">
  <div class="card">
    <div class="card-img">
      <img src="{poke.imageSrc}" alt="{poke.externalUrl}">
    </div>
    <div class="card-details">
      <h2 class="card-name">{poke.name}</h2>
      <div class="card-stats">
        <div class="card-stat">
          <div class="card-stat-value">{poke.power}</div>
          <div class="card-stat-label">PWR</div>
        </div>
        <div class="card-stat">
          <div class="card-stat-value">{poke.damage}</div>
          <div class="card-stat-label">DMG</div>
        </div>
        <div class="card-stat">
          <div class="card-stat-value">{poke.attack}</div>
          <div class="card-stat-label">ATTK</div>
        </div>
        <div class="card-stat">
          <div class="card-stat-value">{poke.health}</div>
          <div class="card-stat-label">HP</div>
        </div>
      </div>
      <div class="card-element">{poke.element}</div>
    </div>
  </div>
</a>
{/each}
</div>

<style>

/* This is the container that goes around the cards to center everything */
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin: 2rem;
}

/* This is the card that has all the colors, border, flex, height/width, and gives space between them*/
.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 350px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease-in-out;
  width: 250px;

  margin-top: 8rem;
  margin-right: 20px;
  margin-left: 10rem;
}

/* This makes the card clickable, used text decoration to hide the link, width and height 100% and displayed in block*/
.card-link {
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
}

/* Creates the hover effect but scales it up by 10% */
.card:hover {
  transform: scale(1.1);
}

/* This is the image inside the card, with height, width, and object-fit */
.card-img {
  height: 200px;
  width: 100%;
}

.card-img img {
  height: 100%;
  object-fit: contain;
  width: 100%;
}

/* Section of the card with the name and stats */
.card-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
}

/* Pokemon name with font size, margin, and text alignment */
.card-name {
  font-size: 24px;
  margin: 0 0 10px;
  text-align: center;
  text-transform: capitalize;
}

/* Container for the Pokemon stats */
.card-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

/* Individual stat with text alignment */
.card-stat {
  text-align: center;
}

/* Value of the stat with font size, font weight, and margin */
.card-stat-value {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

/* Label for the stat with font size and text transformation */
.card-stat-label {
  font-size: 14px;
  text-transform: uppercase;
}

/* Container for the Pokemon's element type with rotate 45 deg to make Pokemon Go card effect */
.card-element {
  background-color: #f44336;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
  text-align: center;
  text-transform: capitalize;
  transform: rotate(45deg);
  width: 75px;
  border-radius: 50px;
}
</style>