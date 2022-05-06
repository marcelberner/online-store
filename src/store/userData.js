import { createSlice } from "@reduxjs/toolkit";

const userData = createSlice({
  name: "wishList",
  initialState: {
    wishlist: [],
    userData: null,
    cart: [],
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
    cartAdd: (state, action) => {
      let seekProduct = state.cart.find(
        (product) => product.productId === action.payload.productId
      );

      if (seekProduct) {
        seekProduct.amount++;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    cartRemove: (state, action) => {
      let seekProduct = state.cart.find(
        (product) => product.productId === action.payload.productId
      );

      seekProduct.amount--;

      if (seekProduct.amount === 0) {
        state.cart = state.cart.filter(
          (product) => product.productId !== action.payload.productId
        );
      }
    },
    cartDelete: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.productId !== action.payload.productId
      );
    },
    cartClear: (state) => {
      state.cart = [];
    },
    wishlistAdd: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    wishlistRemove: (state, action) => {
      state.wishlist = state.wishlist.filter((e) => e !== action.payload);
    },
    dataClear: (state) => {
      state.userData = null;
      state.wishlistProducts = [];
      state.cart = [];
    },
  },
});

export const {
  wishlistAdd,
  wishlistRemove,
  setUserData,
  cartAdd,
  cartRemove,
  cartDelete,
  cartClear,
  setCart,
  setWishlist,
  dataClear,
} = userData.actions;

export default userData.reducer;
