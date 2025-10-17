import { useNavigate } from "react-router-dom";
import { usePokemonData } from "../hooks";
import {
  LoadingSpinner,
  ErrorMessage,
  PokemonList,
  NextButton,
} from "../components";

export const HomePage = () => {
  const navigate = useNavigate();
  const { loadingPokemons, pokemons, errorMessage, loadNext } =
    usePokemonData();

  const handlePokemonClick = (name) => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <main className="app-container">
      <h1>Pokemon App</h1>
      <hr />

      <ErrorMessage message={errorMessage} />

      {loadingPokemons ? (
        <LoadingSpinner />
      ) : (
        <span className="loading-status">Ready to go!</span>
      )}

      {!loadingPokemons && pokemons.length === 0 && <p>No Pokémon found.</p>}

      <PokemonList pokemons={pokemons} onClick={handlePokemonClick} />

      <NextButton isLoading={loadingPokemons} onClick={loadNext} />
    </main>
  );
};
