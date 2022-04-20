import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    wishlistProducts: [],
    userData: null,
    cart: [],
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    cartAdd: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    cartRemove: (state, action) => {
      state.cart = state.cart.filter((e) => e !== action.payload);
    },
    wishlistAdd: (state, action) => {
      state.wishlistProducts = [...state.wishlistProducts, action.payload];
    },
    wishlistRemove: (state, action) => {
      state.wishlistProducts = state.wishlistProducts.filter((e) => e !== action.payload);
    },
    dataClear: (state) => {
      state.userData = null;
      state.wishlistProducts = [];
      state.cart = [];
    }
  },
});

export const { wishlistAdd, wishlistRemove, setUserData, cartAdd, cartRemove } =
  wishListSlice.actions;

export default wishListSlice.reducer;
