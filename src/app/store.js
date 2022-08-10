import { configureStore } from '@reduxjs/toolkit';
import pokedexReducer from '../features/PokeSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokedexReducer
  },
});
