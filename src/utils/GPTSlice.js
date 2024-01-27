import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearchPage: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearchPage = !state.showGPTSearchPage;
    },
    addMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGPTSearchView, addMovieResults } = GPTSlice.actions;
export default GPTSlice.reducer;
