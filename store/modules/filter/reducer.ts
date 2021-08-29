import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: 'animes',
    reducers: {
        setFilter(state, action: PayloadAction<any>) {
            return action.payload;
        }
    }
})

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;