import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails } from "../../store/thunks/getPokemonDetails";
import {
  LoadingSpinner,
  ErrorMessage,
  EmptyState,
  ExploreButton,
} from "../../components";
import "./PokemonDetailPage.css";

export const PokemonDetailPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const {
    pokemonDetails,
    loadingPokemonDetails,
    errorMessage,
    loadingPokemons,
  } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemonDetails(name));
  }, [dispatch, name]);

  if (loadingPokemonDetails) return <LoadingSpinner />;
  if (errorMessage) return <ErrorMessage message={errorMessage} />;

  const shouldShowEmptyState =
    !loadingPokemonDetails && !errorMessage && !pokemonDetails?.name;

  if (shouldShowEmptyState) {
    return (
      <EmptyState
        title="No Pokémon data available"
        message="We couldn’t load this Pokémon’s details. Try again later or choose another one."
        actionLabel="Go back"
        onAction={() => window.history.back()}
      />
    );
  }

  const image =
    pokemonDetails?.sprites?.other?.["official-artwork"]?.front_default ||
    pokemonDetails?.sprites?.front_default;

  const statLabels = {
    hp: "HP",
    attack: "Attack",
    defense: "Defense",
    "special-attack": "Sp. Attack",
    "special-defense": "Sp. Defense",
    speed: "Speed",
  };

  return (
    <div className="pokemon-detail-page">
      <section className="hero-section">
        <img src={image} alt={pokemonDetails.name} className="hero-image" />
        <div className="hero-text">
          <h1>
            #{pokemonDetails.id} {pokemonDetails.name}
          </h1>
          <div className="type-badges">
            {Array.isArray(pokemonDetails.types) &&
              pokemonDetails.types.map((t) => (
                <span key={t.type.name} className={`type-badge ${t.type.name}`}>
                  {t.type.name}
                </span>
              ))}
          </div>
        </div>
      </section>

      <section className="info-grid">
        <div className="info-block">
          <h2>Height</h2>
          <p>{pokemonDetails.height / 10} m</p>
        </div>
        <div className="info-block">
          <h2>Weight</h2>
          <p>{pokemonDetails.weight / 10} kg</p>
        </div>
        <div className="info-block">
          <h2>Abilities</h2>
          <p>
            {Array.isArray(pokemonDetails.abilities)
              ? pokemonDetails.abilities.map((a) => a.ability.name).join(", ")
              : "Unknown"}
          </p>
        </div>
      </section>

      {Array.isArray(pokemonDetails.stats) &&
        pokemonDetails.stats.length > 0 && (
          <section className="stats-section">
            <h2>Base Stats</h2>
            <div className="stats-list">
              {pokemonDetails.stats.map((stat) => (
                <div key={stat.stat.name} className="stat-row">
                  <span className="stat-name">
                    {statLabels[stat.stat.name] || stat.stat.name}
                  </span>
                  <div className="stat-bar">
                    <div
                      className="stat-fill"
                      style={{ width: `${stat.base_stat}%` }}
                    >
                      <span className="stat-value">{stat.base_stat}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      <section className="explore-more">
        <ExploreButton isLoading={loadingPokemons} />
      </section>
    </div>
  );
};
