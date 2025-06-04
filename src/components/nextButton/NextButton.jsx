import PropTypes from "prop-types";
import "./NextButton.css";

export const NextButton = ({ isLoading, onClick }) => {
  return (
    <button
      className="button next-button"
      aria-label="Load next page of Pokémon"
      aria-disabled={isLoading}
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? "Loading..." : "Next"}
    </button>
  );
};

NextButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
