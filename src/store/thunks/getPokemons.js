import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemons } from "../../api/services/pokemonService";

export const getPokemons = createAsyncThunk(
  "pokemon/getPokemons",
  async (page, { rejectWithValue }) => {
    try {
      return await fetchPokemons(page);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
