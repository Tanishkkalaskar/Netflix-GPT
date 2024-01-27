import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GET_MOVIE_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/MovieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    if (!nowPlayingMovies) getMovies();
  }, []);

  const getMovies = async () => {
    const data = await fetch(GET_MOVIE_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;
