import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const KindOfContentToDisplaySlice = createSlice({
    name: 'KindOfContentToDisplay',
    initialState: 'animes',
    reducers: {
        setKindOfContentToDisplay(state, action: PayloadAction<any>) {
            return action.payload;
        }
    }
})

export const { setKindOfContentToDisplay } = KindOfContentToDisplaySlice.actions;
export default KindOfContentToDisplaySlice.reducer;