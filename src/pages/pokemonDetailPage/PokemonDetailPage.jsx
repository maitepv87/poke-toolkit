import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails } from "../../store/thunks/getPokemonDetails";
import { LoadingSpinner, ErrorMessage } from "../../components";
import "./PokemonDetailPage.css";

export const PokemonDetailPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { pokemonDetails, loadingPokemonDetails, errorMessage } = useSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    dispatch(getPokemonDetails(name));
  }, [dispatch, name]);

  if (loadingPokemonDetails) return <LoadingSpinner />;
  if (errorMessage) return <ErrorMessage message={errorMessage} />;

  const image =
    pokemonDetails?.sprites?.other?.["official-artwork"]?.front_default ||
    pokemonDetails?.sprites?.front_default;

  return (
    <div className="pokemon-detail-page">
      <div className="detail-header">
        <img src={image} alt={pokemonDetails.name} className="detail-image" />
        <h1 className="detail-title">
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

      <div className="detail-info">
        <p>
          <strong>Height:</strong> {pokemonDetails.height / 10} m
        </p>
        <p>
          <strong>Weight:</strong> {pokemonDetails.weight / 10} kg
        </p>
        <p>
          <strong>Abilities:</strong>
          {Array.isArray(pokemonDetails.abilities)
            ? pokemonDetails.abilities.map((a) => a.ability.name).join(", ")
            : "Unknown"}
        </p>
      </div>

      <div className="detail-stats">
        <h2>Base Stats</h2>
        {Array.isArray(pokemonDetails.stats) &&
          pokemonDetails.stats.map((stat) => (
            <div key={stat.stat.name} className="stat-row">
              <span>{stat.stat.name}</span>
              <div className="stat-bar">
                <div
                  className="stat-fill"
                  style={{ width: `${stat.base_stat}%` }}
                />
              </div>
              <span>{stat.base_stat}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
