import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteAnime {
  mal_id: number,
  image_url: string,
  title: string
}

const authSlice = createSlice({
    name: 'auth',
    initialState: null,
    reducers: {
        setLoggedUser(state, action: PayloadAction<any>) {
            return action.payload;
        },
        clearLoggedUser(state) {
            return null;
        },
        updateFavorites(state, action: PayloadAction<FavoriteAnime[]>){
          return {
            ...state,
            favorites:action.payload
          }
        }
    }
})

export const { setLoggedUser, clearLoggedUser, updateFavorites } = authSlice.actions;
export default authSlice.reducer;