import axios, { AxiosError } from "axios";

const handleApiError = (error) => {
  if (error instanceof AxiosError) {
    return (
      error.response?.data?.message ||
      error.message ||
      "Unexpected error occurred"
    );
  }
  return "Unexpected error occurred";
};

/**
 * Fetches a paginated list of Pokémon from PokéAPI.
 * @param {number} page - The current page index (0-based).
 * @returns {Object} - An object with pokemons array and next page index.
 */
export const fetchPokemons = async (page = 0) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${page * 12}`
    );

    return { pokemons: response.data.results, page: page + 1 };
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

/**
 * Fetches detailed data for a specific Pokémon by name.
 * @param {string} name - The name of the Pokémon.
 * @returns {Object} - Pokémon data from PokéAPI.
 */
export const fetchPokemonByName = async (name) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};
