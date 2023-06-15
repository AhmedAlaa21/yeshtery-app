import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from '../thunk';

const initialState = {
  isLoading: false,
  error: null,
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state: any, action: any) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state: any, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
