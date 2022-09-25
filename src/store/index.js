import { configureStore } from "@reduxjs/toolkit";

import userDataReducer from "./userData";
import userAuthReducer from "./userAuth";
import dataRequestReducer from "./dataRequest";
import orderDataReducer from "./orderData";
import windowReducer from "./window";

const store = configureStore({
  reducer: {
    userData: userDataReducer,
    userAuth: userAuthReducer,
    dataRequest: dataRequestReducer,
    orderData: orderDataReducer,
    window: windowReducer,
  },
});

export default store;
