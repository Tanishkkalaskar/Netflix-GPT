import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies) return;
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-80 relative z-20">
        <MovieList
          title={"Now playing"}
          movies={movies?.nowPlayingMovies}
        ></MovieList>
        <MovieList title={"Popular"} movies={movies?.popularMovies}></MovieList>
        <MovieList
          title={"Top rated"}
          movies={movies?.topRatedMovies}
        ></MovieList>
        <MovieList
          title={"Upcoming"}
          movies={movies?.upcomingMovies}
        ></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
