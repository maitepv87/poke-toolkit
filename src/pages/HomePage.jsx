import {
  LoadingSpinner,
  ErrorMessage,
  PokemonCard,
  NextButton,
} from "../components";
import { usePokemonData } from "../hooks";

export const HomePage = () => {
  const { loadingPokemons, pokemons, errorMessage, loadNext } =
    usePokemonData();

  return (
    <div className="app-container">
      <h1>Pokemon App</h1>
      <hr />

      <ErrorMessage message={errorMessage} />

      {loadingPokemons ? (
        <LoadingSpinner />
      ) : (
        <span className="loading-status">Ready to go!</span>
      )}

      {!loadingPokemons && pokemons.length === 0 && <p>No Pokémon found.</p>}

      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemonData={pokemon}
            pokemonImage={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          />
        ))}
      </div>

      <NextButton isLoading={loadingPokemons} onClick={loadNext} />
    </div>
  );
};
