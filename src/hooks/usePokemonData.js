import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../store/thunks";
import { resetState } from "../store/slices/pokemonSlice";

export const usePokemonData = () => {
  const dispatch = useDispatch();
  const { pokemons, currentPage, loadingPokemons, errorMessage } = useSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    dispatch(getPokemons());

    return () => dispatch(resetState());
  }, [dispatch]);

  const loadNext = () => {
    if (typeof currentPage === "number") {
      dispatch(getPokemons(currentPage));
    }
  };

  return { pokemons, loadingPokemons, errorMessage, loadNext };
};
