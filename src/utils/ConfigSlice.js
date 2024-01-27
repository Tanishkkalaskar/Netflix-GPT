import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
  name: "config",
  initialState: {
    language: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = ConfigSlice.actions;
export default ConfigSlice.reducer;
