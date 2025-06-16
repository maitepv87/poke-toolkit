import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getPokemonDetails } from "../../store/thunks";
import "./PokemonCard.css";

export const PokemonCard = ({ pokemonData, pokemonImage, onClick }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getPokemonDetails(pokemonData.name));
    onClick(pokemonData.name);
  };

  return (
    <div
      className="pokemon-card"
      role="article"
      aria-label={`Card for ${pokemonData.name}`}
      onClick={handleClick}
    >
      <img
        src={pokemonImage}
        alt={pokemonData.name}
        className="pokemon-image"
      />
      <div className="pokemon-name">{pokemonData.name}</div>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemonData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  pokemonImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
