import { createSlice } from "@reduxjs/toolkit";
import { getPokemons, getPokemonDetails } from "../thunks";

const initialState = {
  pokemons: [],
  pokemonDetails: {},
  currentPage: 0,
  loadingPokemons: false,
  loadingPokemonDetails: false,
  errorMessage: null,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    // * Fetch Pokemons *//
    builder.addCase(getPokemons.pending, (state) => {
      state.loadingPokemons = true;
      state.errorMessage = null;
    });

    builder.addCase(getPokemons.fulfilled, (state, action) => {
      state.loadingPokemons = false;
      state.errorMessage = null;
      state.pokemons = action.payload.pokemons;
      state.currentPage = action.payload.page;
    });

    builder.addCase(getPokemons.rejected, (state, action) => {
      state.loadingPokemons = false;
      state.errorMessage = action.payload;
    });

    // * Fetch Pokemon Details *//
    builder.addCase(getPokemonDetails.pending, (state) => {
      state.loadingPokemonDetails = true;
      state.errorMessage = null;
    });

    builder.addCase(getPokemonDetails.fulfilled, (state, action) => {
      state.loadingPokemonDetails = false;
      state.errorMessage = null;
      state.pokemonDetails = action.payload;
    });

    builder.addCase(getPokemonDetails.rejected, (state, action) => {
      state.loadingPokemonDetails = false;
      state.errorMessage = action.payload;
    });
  },
});

export const { resetState } = pokemonSlice.actions;
export default pokemonSlice.reducer;
