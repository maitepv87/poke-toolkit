import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
// import { CounterApp } from "./CounterApp";
import { PokemonApp } from "./PokemonApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <CounterApp /> */}
      <PokemonApp />
    </Provider>
  </React.StrictMode>
);
