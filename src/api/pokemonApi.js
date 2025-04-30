import axios from "axios";

// Configure Axios instance for the PokeAPI
export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
