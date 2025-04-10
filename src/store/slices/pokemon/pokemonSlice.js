import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  page: 0,
  isLoading: false,
  error: null,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    loading: (state) => {
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
  },
});

// Action creators are generated for each case reducer function
export const { loading, setError, setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
