import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearchPage: false,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearchPage = !state.showGPTSearchPage;
    },
  },
});

export const { toggleGPTSearchView } = GPTSlice.actions;
export default GPTSlice.reducer;
