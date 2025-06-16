import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../store/thunks";
import { resetState } from "../store/slices/pokemonSlice";

export const usePokemonData = () => {
  const dispatch = useDispatch();
  const { loadingPokemons, pokemons, currentPage, errorMessage } = useSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    dispatch(getPokemons());
    return () => dispatch(resetState());
  }, [dispatch]);

  const loadNext = () => dispatch(getPokemons(currentPage));

  return { loadingPokemons, pokemons, errorMessage, loadNext };
};
