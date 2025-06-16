import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ErrorMessage, LoadingSpinner } from "../";
import "./PokemonModal.css";

const modalImageStyle = {
  width: "100%",
  maxWidth: "300px",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  marginBottom: "15px",
};

export const PokemonModal = ({ isOpen, onClose }) => {
  const pokemonDetails = useSelector((state) => state.pokemon.pokemonDetails);
  const loadingPokemonDetails = useSelector(
    (state) => state.pokemon.loadingPokemonDetails
  );
  const errorMessage = useSelector((state) => state.pokemon.errorMessage);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
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
                src={
                  pokemonDetails.sprites?.other?.official_artwork
                    ?.front_default || pokemonDetails.sprites?.front_default
                }
                alt={pokemonDetails.name}
                style={modalImageStyle}
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
