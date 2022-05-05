import { configureStore } from "@reduxjs/toolkit";

import userDataReducer from "./userData";
import userAuthReducer from "./userAuth";
import dataRequestReducer from "./dataRequest";
import orderDataReducer from "./orderData";

const store = configureStore({
  reducer: {
    userData: userDataReducer,
    userAuth: userAuthReducer,
    dataRequest: dataRequestReducer,
    orderData: orderDataReducer
  },
});

export default store;
