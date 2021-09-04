import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const ContentPageToDisplay = createSlice({
    name: 'ContentPageToDisplay',
    initialState: null,
    reducers: {
        setContentPageToDisplay(state, action: PayloadAction<string>) {
            return action.payload;
        },
        clearContentPageToDisplay(state, action: PayloadAction<string>){
          return null;
        }
    }
})

export const { setContentPageToDisplay,clearContentPageToDisplay } = ContentPageToDisplay.actions;
export default ContentPageToDisplay.reducer;