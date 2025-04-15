import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const {
    isLoading,
    pokemons = [],
    page,
    error,
  } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>My Pokemon</h1>
      <hr />

      {error && <div className="error-message">{error}</div>}

      <span className="loading-status">
        {isLoading ? "Loading..." : "Ready to go!"}
      </span>

      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-card">
            <img
              src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
              alt={pokemon.name}
              className="pokemon-image"
            />
            <div className="pokemon-name">{pokemon.name}</div>
          </div>
        ))}
      </div>

      <button
        className="next-button"
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </div>
  );
};
