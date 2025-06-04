import { apiClient } from "../../../api/apiClient";
import { loading, setPokemons, setError } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(loading());

    try {
      const response = await apiClient.get(
        `/pokemon?limit=10&offset=${page * 10}`
      );

      dispatch(
        setPokemons({ pokemons: response.data.results, page: page + 1 })
      );
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Unexpected error occurred";
      dispatch(setError(errorMessage));
    }
  };
};
