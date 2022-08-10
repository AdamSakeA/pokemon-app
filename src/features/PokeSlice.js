import { createSlice } from '@reduxjs/toolkit';

const pokedexSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokedexName : ""
    },
    reducers: {
        update: (state, action) => {
            state.pokedexName = action.payload.pokedexName
        }
    }
})

export const { update } = pokedexSlice.actions;
export default pokedexSlice.reducer;