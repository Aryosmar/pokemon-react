import axios from "axios";

const pokemonAPI = "https://pokeapi.co/api/v2/pokemon";

export async function buscarPokemons() {
  try {
    let id;
    let pokemon;

    const pokemonArray = [];

    for (id = 1; id <= 150; id++) {
      const pokemon = await axios.get(`${pokemonAPI}/${id}`);
      pokemonArray.push(pokemon);
    }

    return pokemonArray;
  } catch (error) {
    console.log(error);
  }
}