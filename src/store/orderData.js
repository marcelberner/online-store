import { createSlice } from "@reduxjs/toolkit";

const orderDataSlice = createSlice({
  name: "orderData",
  initialState: {
    customerData: null,
    paymentMethod: null,
    deliveryMethod: null,
    products: null,
    totalPrice: null,
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
  },
});

export const {
  setCustomerData,
  setPaymentMethod,
  setDeliveryMethod,
  setProducts,
  setTotalPrice,
} = orderDataSlice.actions;

export default orderDataSlice.reducer;
