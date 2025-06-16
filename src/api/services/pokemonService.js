import { AxiosError } from "axios";
import { apiClient } from "../apiClient";

const POKEMON_BASE_URL = "/pokemon";

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

export const fetchPokemons = async (page = 0) => {
  try {
    const response = await apiClient.get(
      `${POKEMON_BASE_URL}?limit=10&offset=${page * 10}`
    );
    return { pokemons: response.data.results, page: page + 1 };
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

export const fetchPokemonDetails = async (name) => {
  try {
    const response = await apiClient.get(`${POKEMON_BASE_URL}/${name}`);
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};
