export const load = async ({ fetch }) => {

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  
  const pokemons = await response.json();

  return {
    pokemons: pokemons.results
  }
}