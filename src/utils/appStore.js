import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import movieReducer from "./MovieSlice";
import GPTReducer from "./GPTSlice";
import configreducer from "./ConfigSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: GPTReducer,
    config: configreducer,
  },
});

export default appStore;
