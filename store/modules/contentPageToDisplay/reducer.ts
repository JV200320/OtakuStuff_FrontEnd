import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageType {
  id:string,
  kind: string
}

const ContentPageToDisplay = createSlice({
    name: 'ContentPageToDisplay',
    initialState: null,
    reducers: {
        setContentPageToDisplay(state, action: PayloadAction<PageType>) {
            return action.payload;
        },
        clearContentPageToDisplay(state){
          return null;
        }
    }
})

export const { setContentPageToDisplay,clearContentPageToDisplay } = ContentPageToDisplay.actions;
export default ContentPageToDisplay.reducer;