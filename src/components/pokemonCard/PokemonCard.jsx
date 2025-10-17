import React, { memo } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import "./PokemonCard.css";
import { getPokemonDetails } from "../../store/thunks";

/**
 * Displays a single Pokémon card with image and name.
 * Triggers detail fetch and communicates interaction with visual clarity and accessibility.
 */

const PokemonCard = ({ pokemonData, pokemonImage, onClick }) => {
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

export default memo(PokemonCard);
