import { LoadingSpinner, ErrorMessage, PokemonCard } from "../components";
import { usePokemonData } from "../hooks";

export const HomePage = () => {
  const { isLoading, pokemons, error, loadNext } = usePokemonData();

  return (
    <div className="app-container">
      <h1>Pokemon App</h1>
      <hr />

      <ErrorMessage message={error} />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <span className="loading-status">Ready to go!</span>
      )}

      {!isLoading && pokemons.length === 0 && <p>No Pokémon found.</p>}

      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemonData={pokemon}
            pokemonImage={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          />
        ))}
      </div>

      <button
        className="next-button"
        aria-label="Load next page of Pokémon"
        aria-disabled={isLoading}
        disabled={isLoading}
        // onClick={() => dispatch(getPokemons(page))}
        onClick={loadNext}
      >
        {isLoading ? "Loading..." : "Next"}
      </button>
    </div>
  );
};
