import { configureStore } from "@reduxjs/toolkit";

import wishListReducer from "./wishList";


const store = configureStore({reducer: {
    wishList: wishListReducer,
}});

export default store;
