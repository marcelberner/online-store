import { createSlice } from "@reduxjs/toolkit";

const isLoading = createSlice({
  name: "isLoading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setLoaded: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setLoading, setLoaded } = isLoading.actions;

export default isLoading.reducer;
