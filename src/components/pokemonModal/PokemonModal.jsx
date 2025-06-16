import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ErrorMessage, LoadingSpinner } from "../";
import "./PokemonModal.css";

export const PokemonModal = ({ isOpen, onClose }) => {
  const { pokemonDetails, loadingPokemonDetails, errorMessage } = useSelector(
    (state) => state.pokemon
  );

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {" "}
        {/* ✅ Cambio para un estilo de tarjeta */}
        {loadingPokemonDetails ? (
          <LoadingSpinner />
        ) : pokemonDetails ? (
          <>
            <div className="modal-header">
              <h2>{pokemonDetails.name}</h2>
              <button className="close-button" onClick={onClose}>
                ✖
              </button>
            </div>

            <div className="modal-body">
              <img
                src={pokemonDetails.sprites?.front_default}
                alt={pokemonDetails.name}
                className="pokemon-modal-image"
              />
              <div className="pokemon-modal-info">
                <p>
                  <strong>Height:</strong> {pokemonDetails.height}
                </p>
                <p>
                  <strong>Weight:</strong> {pokemonDetails.weight}
                </p>
                <p>
                  <strong>Type:</strong>{" "}
                  {pokemonDetails?.types?.map((t) => t.type.name).join(", ") ??
                    "Unknown"}
                </p>
              </div>
            </div>
          </>
        ) : (
          <ErrorMessage message={errorMessage} />
        )}
      </div>
    </div>
  );
};

PokemonModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
