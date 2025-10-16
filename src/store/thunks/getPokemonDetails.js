import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemonByName } from "../../services/pokemonService";

export const getPokemonDetails = createAsyncThunk(
  "pokemon/getPokemonDetails",
  async (name, { rejectWithValue }) => {
    try {
      return await fetchPokemonByName(name);
    } catch (error) {
      console.error(`Error fetching details for ${name}:`, error);
      return rejectWithValue(error.message);
    }
  }
);
