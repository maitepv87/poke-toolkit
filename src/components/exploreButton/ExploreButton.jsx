import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./ExploreButton.css";

/**
 * Renders a call-to-action button that navigates back to the Pokémon list.
 * Used to guide users from detail or empty states with emotional clarity.
 */

export const ExploreButton = ({ isLoading, to = "/" }) => {
  const navigate = useNavigate();

  return (
    <button
      className="button explore-button"
      aria-label="Return to Pokémon list"
      aria-disabled={isLoading}
      disabled={isLoading}
      onClick={() => navigate(to)}
    >
      {isLoading ? "Returning..." : "Explore more Pokémon"}
    </button>
  );
};

ExploreButton.propTypes = {
  to: PropTypes.string,
};
