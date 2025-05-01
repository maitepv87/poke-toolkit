import PropTypes from "prop-types";
import "./PokemonCard.css";

export const PokemonCard = ({ pokemon, image }) => {
  return (
    <div className="pokemon-card">
      <img src={image} alt={pokemon.name} className="pokemon-image" />
      <div className="pokemon-name">{pokemon.name}</div>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
};
