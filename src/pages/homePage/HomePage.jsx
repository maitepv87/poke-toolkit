import { useNavigate } from "react-router-dom";
import { usePokemonData } from "../../hooks";
import {
  LoadingSpinner,
  ErrorMessage,
  EmptyState,
  PokemonList,
  NextButton,
} from "../../components";
import "./HomePage.css";

export const HomePage = () => {
  const navigate = useNavigate();
  const { loadingPokemons, pokemons, errorMessage, loadNext } =
    usePokemonData();

  const handlePokemonClick = (name) => {
    navigate(`/pokemon/${name}`);
  };

  if (errorMessage) return <ErrorMessage message={errorMessage} />;

  return (
    <main className="app-container">
      <h1>Pokemon App</h1>
      <hr />

      {pokemons.length === 0 && loadingPokemons && (
        <LoadingSpinner variant="global" />
      )}

      {!loadingPokemons && pokemons.length === 0 && (
        <EmptyState
          title="No Pokémon found"
          message="No Pokémon available right now. Please try again later."
        />
      )}

      <PokemonList pokemons={pokemons} onClick={handlePokemonClick} />

      <NextButton isLoading={loadingPokemons} onClick={loadNext} />

      {pokemons.length > 0 && loadingPokemons && (
        <LoadingSpinner variant="inline" />
      )}
    </main>
  );
};
