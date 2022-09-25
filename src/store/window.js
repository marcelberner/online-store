import { createSlice } from "@reduxjs/toolkit";

const windowSlice = createSlice({
  name: "window",
  initialState: {
    resolution: window.innerWidth,
  },
  reducers: {
    setResolution: (state, action) => {
      state.resolution = action.payload;
    },
  },
});

export const { setResolution } = windowSlice.actions;

export default windowSlice.reducer;
