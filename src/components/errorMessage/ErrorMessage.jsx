import PropTypes from "prop-types";
import "./ErrorMessage.css";

/**
 * Displays an error message with visual and semantic clarity.
 * Used to communicate API or UI errors to the user.
 */

export const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="error-message" role="alert" aria-live="assertive">
      {message}
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
