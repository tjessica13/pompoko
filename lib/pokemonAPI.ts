
// pokeapi link
const POKEMON_API_LINK = "https://pokeapi.co/api/v2/";


// get the first 151 pokemon using the api and return as a list
export async function getPokemonList() {
    const response = await fetch(POKEMON_API_LINK + "pokemon?limit=151&offset=0");
    const data = await response.json();
    return data.results;
}

