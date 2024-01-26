import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/MovieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer =
      filteredData.length !== 0 ? filteredData[0] : json.results[0];

    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useMovieTrailer;
