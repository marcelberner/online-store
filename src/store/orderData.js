import { createSlice } from "@reduxjs/toolkit";

const orderDataSlice = createSlice({
  name: "orderData",
  initialState: {
    customerData: null,
    paymentMethod: null,
    deliveryMethod: null,
    products: [],
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    setCustomerData: (state, action) => {
      state.customerData = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    setDeliveryMethod: (state, action) => {
      state.deliveryMethod = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    clearOrderData: (state) => {
      state.totalPrice = 0;
      state.customerData = null;
      state.paymentMethod = null;
      state.deliveryMethod = null;
      state.products = [];
    },

    productAdd: (state, action) => {
      let seekProduct = state.products.find(
        (product) => product.productId === action.payload.productId
      );

      state.totalPrice += action.payload.price;
      state.totalAmount += 1;

      if (seekProduct) {
        seekProduct.amount++;
      } else {
        state.products = [...state.products, action.payload];
      }
    },
    productRemove: (state, action) => {
      let seekProduct = state.products.find(
        (product) => product.productId === action.payload.productId
      );

      seekProduct.amount--;
      state.totalPrice -= action.payload.price;
      state.totalAmount -= 1;

      if (seekProduct.amount === 0) {
        state.products = state.products.filter(
          (product) => product.productId !== action.payload.productId
        );
      }
    },
    productDelete: (state, action) => {
      let seekProduct = state.products.find(
        (product) => product.productId === action.payload.productId
      );

      state.totalPrice -= action.payload.price * seekProduct.amount;
      state.totalAmount -= seekProduct.amount;

      state.products = state.products.filter(
        (product) => product.productId !== action.payload.productId
      );
    },
    productClear: (state) => {
      state.totalPrice = 0;
      state.totalAmount = 0;
      state.products = [];
    },
  },
});

export const {
  setCustomerData,
  setPaymentMethod,
  setDeliveryMethod,
  setProducts,
  setTotalPrice,
  clearOrderData,
  productAdd,
  productRemove,
  productClear,
  productDelete,
} = orderDataSlice.actions;

export default orderDataSlice.reducer;
