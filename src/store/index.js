import { configureStore } from "@reduxjs/toolkit";

import userDataReducer from "./userData";
import userAuthReducer from "./userAuth";
import dataRequestReducer from "./dataRequest";

const store = configureStore({
  reducer: {
    userData: userDataReducer,
    userAuth: userAuthReducer,
    dataRequest: dataRequestReducer
  },
});

export default store;
