import { configureStore } from "@reduxjs/toolkit";

import wishListReducer from "./wishList";
import userAuthReducer from "./userAuth";
import isLoadingReducer from "./loading";

const store = configureStore({
  reducer: {
    wishList: wishListReducer,
    userAuth: userAuthReducer,
    isLoading: isLoadingReducer,
  },
});

export default store;
