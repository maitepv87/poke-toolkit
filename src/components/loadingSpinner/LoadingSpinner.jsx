import "./LoadingSpinner.css";

/**
 * Displays a loading indicator with accessible feedback.
 * Used during data fetch operations to inform the user.
 */

export const LoadingSpinner = ({ variant = "global" }) => {
  return (
    <div
      className={`loading-spinner ${
        variant === "inline" ? "loading-inline" : "loading-global"
      }`}
      role="status"
      aria-live="polite"
    >
      <span className="loading-text">
        {variant === "inline" ? "Loading more Pokémon…" : "Loading Pokémon..."}
      </span>
    </div>
  );
};
