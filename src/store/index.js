import { configureStore } from "@reduxjs/toolkit";

import orderDataReducer from "./orderData";
import windowReducer from "./window";

const store = configureStore({
  reducer: {
    orderData: orderDataReducer,
    window: windowReducer,
  },
});

export default store;
