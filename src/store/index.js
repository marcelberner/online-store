import { configureStore } from "@reduxjs/toolkit";

import userDataReducer from "./userData";
import userAuthReducer from "./userAuth";
import isLoadingReducer from "./loading";

const store = configureStore({
  reducer: {
    userData: userDataReducer,
    userAuth: userAuthReducer,
    isLoading: isLoadingReducer
  },
});

export default store;
