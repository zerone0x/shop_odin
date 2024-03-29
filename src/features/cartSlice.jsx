import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],

};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.value.push(action.payload);
    },
    remove(state, action) {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    set(state, action) {
      state.value = action.payload;
    },
    setAmount(state, action) {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          state.value = { ...item, quantity: action.payload.quantity };
        }
      });
    },
  },
});

export const { add, remove, set, setAmount } = cartSlice.actions;
export const selectCart = (state) => state.cart.value;


export default cartSlice.reducer;
