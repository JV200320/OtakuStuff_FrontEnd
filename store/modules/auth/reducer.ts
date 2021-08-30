import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: null,
    reducers: {
        setLoggedUser(state, action: PayloadAction<any>) {
            return action.payload;
        },
        clearLoggedUser(state) {
            return null;
        }
    }
})

export const { setLoggedUser, clearLoggedUser } = authSlice.actions;
export default authSlice.reducer;