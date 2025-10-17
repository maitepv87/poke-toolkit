import { PokemonCard } from "../";
import "./PokemonList.css";

export const PokemonList = ({ pokemons, onClick }) => (
  <div className="pokemon-list">
    {pokemons.map((pokemon) => (
      <PokemonCard
        key={pokemon.name}
        pokemonData={pokemon}
        pokemonImage={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
        onClick={() => onClick(pokemon.name)}
      />
    ))}
  </div>
);
