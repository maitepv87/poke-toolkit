import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemons } from "../../services/pokemonService";

export const getPokemons = createAsyncThunk(
  "pokemon/getPokemons",
  async (page, { rejectWithValue }) => {
    try {
      return await fetchPokemons(page);
    } catch (error) {
      console.error(`Error fetching Pokemons:`, error);
      return rejectWithValue(error.message);
    }
  }
);
