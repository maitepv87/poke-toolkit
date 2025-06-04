import { AxiosError } from "axios";
import { apiClient } from "../../api/apiClient";
import { setLoading, setPokemons, setError } from "../slices/pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await apiClient.get(
        `/pokemon?limit=10&offset=${page * 10}`
      );

      const results = response.data.results;

      dispatch(setPokemons({ pokemons: results, page: page + 1 }));
    } catch (error) {
      let errorMessage = "Unexpected error occurred";
      if (error instanceof AxiosError) {
        errorMessage =
          error.response?.data?.message || error.message || errorMessage;
      }
      dispatch(setError(errorMessage));
    }
  };
};
