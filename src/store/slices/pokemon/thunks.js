import { pokemonApi } from "../../../api/pokemonApi";
import { loading, setPokemons, setError } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(loading());
    try {
      const response = await pokemonApi.get(
        `/pokemon?limit=10&offset=${page * 10}`
      );

      dispatch(
        setPokemons({ pokemons: response.data.results, page: page + 1 })
      );
    } catch (error) {
      dispatch(setError("Failed to load pokemons"));
    }
  };
};
