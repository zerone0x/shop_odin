import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  status: 'idle',
  error: null,
};
const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    
  },
  extraReducers(builder){
    builder
      .addCase(fetchshops.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchshops.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched shop to the array
        state.value = action.payload
      })
      .addCase(fetchshops.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});


export const selectShop = (state) => state.shop.value;

export const fetchshops = createAsyncThunk("shop/fetchshops", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
    }
);


export default shopSlice.reducer;
