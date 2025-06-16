import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemonDetails } from "../../api/services/pokemonService";

export const getPokemonDetails = createAsyncThunk(
  "pokemon/getPokemonDetails",
  async (name, { rejectWithValue }) => {
    try {
      return await fetchPokemonDetails(name);
    } catch (error) {
      console.error(`Error fetching details for ${name}:`, error);
      return rejectWithValue(error.message);
    }
  }
);
