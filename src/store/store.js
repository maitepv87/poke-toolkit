import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slices/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
