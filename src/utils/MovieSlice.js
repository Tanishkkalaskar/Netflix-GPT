import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailer, addPopularMovies } =
  MovieSlice.actions;
export default MovieSlice.reducer;
