
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const apiCaller = createAsyncThunk('auth/signup', async (userData) => {
    try {
        const response = await axios.post('/api/signup', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
});
