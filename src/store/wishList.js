import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState: initialState,
  reducers: {
    add: (state, action) => state.push(action.payload),
    remove: (state, action) => state.filter((e) => e !== action.payload),
  },
});

export const {add, remove} = wishListSlice.actions;

export default wishListSlice.reducer
