import { configureStore } from "@reduxjs/toolkit";

import wishListReducer from "./wishList";
import userAuthReducer from "./userAuth";

const store = configureStore({
  reducer: {
    wishList: wishListReducer,
    userAuth: userAuthReducer,
  },
});

export default store;
