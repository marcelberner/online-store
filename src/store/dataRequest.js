import { createSlice } from "@reduxjs/toolkit";

const dataRequest = createSlice({
  name: "wishList",
  initialState: {
    requestStatus: true,
  },
  reducers: {
    changeRequestStatus: (state) => {
      state.requestStatus = !state.requestStatus;
    },
  },
});

export const { changeRequestStatus } = dataRequest.actions;

export default dataRequest.reducer;
