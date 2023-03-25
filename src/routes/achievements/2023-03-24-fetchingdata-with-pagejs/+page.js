
export const load = async ({ fetch }) => {

  const response = await fetch(`https://api.disneyapi.dev/characters`);
  
  const characters = await response.json();

  return {
    characters: characters.data
  }
}