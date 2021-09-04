import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const KindOfContentListToDisplaySlice = createSlice({
    name: 'KindOfContentListToDisplay',
    initialState: 'animes',
    reducers: {
        setKindOfContentListToDisplay(state, action: PayloadAction<string>) {
            return action.payload;
        }
    }
})

export const { setKindOfContentListToDisplay } = KindOfContentListToDisplaySlice.actions;
export default KindOfContentListToDisplaySlice.reducer;