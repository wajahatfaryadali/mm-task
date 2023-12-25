import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authToken: null,
};

const auth = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.authToken = action.payload.data;
        },
        logOut: (state, action) => {
            state.authToken = null
        },
    },
});

export const { loginSuccess, logOut } = auth.actions;
export default auth.reducer;
