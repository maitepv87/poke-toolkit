import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  page: 0,
  isLoading: false,
  error: null,
};

// Redux slice for managing Pokémon state
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
    resetState() {
      return { ...initialState };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setError, setPokemons, resetState } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
