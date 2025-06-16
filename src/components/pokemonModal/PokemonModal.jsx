import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import "./PokemonModal.css";

export const PokemonModal = ({ isOpen, onClose, selectedPokemon }) => {
  const pokemonDetails = useSelector(
    (state) => state.pokemon.pokemonDetails[selectedPokemon]
  );

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {pokemonDetails ? (
          <>
            <h2>{pokemonDetails.name}</h2>
            <img
              src={pokemonDetails.sprites?.front_default}
              alt={pokemonDetails.name}
            />
            <p>Height: {pokemonDetails.height}</p>
            <p>Weight: {pokemonDetails.weight}</p>
            <p>
              Type: {pokemonDetails.types.map((t) => t.type.name).join(", ")}
            </p>
            <button onClick={onClose}>Close</button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

PokemonModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedPokemon: PropTypes.string,
};
