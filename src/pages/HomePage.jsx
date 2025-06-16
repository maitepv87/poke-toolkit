import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  LoadingSpinner,
  ErrorMessage,
  PokemonCard,
  NextButton,
  PokemonModal,
} from "../components";
import { usePokemonData } from "../hooks";
import { getPokemonDetails } from "../store/thunks";
import { resetState } from "../store/slices";

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { loadingPokemons, pokemons, errorMessage, loadNext } =
    usePokemonData();

  const handlePokemonClick = (name) => {
    dispatch(getPokemonDetails(name));
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // dispatch(resetState());
  };

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
            onClick={() => handlePokemonClick(pokemon.name)}
          />
        ))}
      </div>

      <NextButton isLoading={loadingPokemons} onClick={loadNext} />

      <PokemonModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
