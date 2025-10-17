import PropTypes from "prop-types";
import "./EmptyState.css";

/**
 * Displays a visual message when no content is available.
 * Used to communicate empty states with clarity and emotional empathy.
 */

export const EmptyState = ({ title, message, actionLabel, onAction }) => {
  return (
    <div className="empty-state" role="status" aria-live="polite">
      <h2 className="empty-title">{title}</h2>
      <p className="empty-message">{message}</p>
      {actionLabel && onAction && (
        <button className="empty-action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
};

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
};
