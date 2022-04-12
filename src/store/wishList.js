import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    products: [],
  },
  reducers: {
    add: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    remove: (state, action) => {
      state.products = state.products.filter((e) => e !== action.payload);
    },
  },
});

export const { add, remove } = wishListSlice.actions;

export default wishListSlice.reducer;
