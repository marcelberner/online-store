import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    token: localStorage.getItem("token"),
    userId: localStorage.getItem("userId"),
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.token = null;
      state.userId = null;
    },
  },
});

export const { login, logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;
