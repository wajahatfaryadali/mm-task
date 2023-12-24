import { createSlice } from '@reduxjs/toolkit';
import { apiCaller } from '../../apiCaller';

const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(apiCaller.pending, (state) => {
                state.loading = true;
            })
            .addCase(apiCaller.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // Store the signup response in the state
            })
            .addCase(apiCaller.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default signupSlice.reducer;
