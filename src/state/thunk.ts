import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, {rejectWithValue}) => {
    try {
      const response: any = await axios.get(
        'https://api-dev.yeshtery.com/v1/yeshtery/products',
      );
      return response.data.products;
    } catch (error: any) {
      return rejectWithValue(error?.message);
    }
  },
);
