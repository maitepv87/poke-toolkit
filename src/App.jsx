import { useState, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getPokemonDetails } from "./store/thunks/getPokemonDetails";
import { clearPokemonDetails } from "./store/slices/pokemonSlice";
import { usePokemonData } from "./hooks";
import {
  LoadingSpinner,
  ErrorMessage,
  PokemonCard,
  NextButton,
  PokemonModal,
} from "./components";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { loadingPokemons, pokemons, errorMessage, loadNext } =
    usePokemonData();

  const handlePokemonClick = useCallback(
    (name) => {
      dispatch(getPokemonDetails(name));
      setIsModalOpen(true);
    },
    [dispatch]
  );

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    dispatch(clearPokemonDetails());
  }, [dispatch]);

  const pokemonList = useMemo(
    () =>
      pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemonData={pokemon}
          pokemonImage={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          onClick={() => handlePokemonClick(pokemon.name)}
        />
      )),
    [pokemons, handlePokemonClick]
  );

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

      <div className="pokemon-list">{pokemonList}</div>

      <NextButton isLoading={loadingPokemons} onClick={loadNext} />

      <PokemonModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
