import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const animeSlice = createSlice({
    name: 'animes',
    initialState: null,
    reducers: {
        setAnimes(state, action: PayloadAction<any>) {
            return action.payload; 
        }
    }
})

export const { setAnimes } = animeSlice.actions;
export default animeSlice.reducer;