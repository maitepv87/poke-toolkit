import PropTypes from "prop-types";
import { PokemonCard } from "../";
import "./PokemonList.css";
import { useCallback } from "react";

/**
 * Renders a list of Pokémon cards.
 * Used to display paginated Pokémon data with visual clarity and interaction.
 * Optimized with useCallback to support memoized child components.
 */

export const PokemonList = ({ pokemons, onClick }) => {
  const handleClick = useCallback((name) => onClick(name), [onClick]);

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemonData={pokemon}
          pokemonImage={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
