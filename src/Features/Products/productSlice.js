import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://fakestoreapi.com/products';

export const fetchAPIProduct = createAsyncThunk("user/fetchAPIProduct",
    async () => {
        try {
            const response = await axios.get(API);
            return response.data;
        } catch (error) {
            return error.message
        }
    }
);



export const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        Error: null,
        isLoadding: false
    },
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(fetchAPIProduct.pending, (state, action) => {
                state.isLoadding = true
            })
            .addCase(fetchAPIProduct.fulfilled, (state, action) => {
                state.isLoadding = false;
                state.product = action.payload
            })
            .addCase(fetchAPIProduct.rejected, (state, action) => {
                state.isLoadding = false;
                state.Error = action.error.message
            })
    }

})



export default productSlice.reducer


