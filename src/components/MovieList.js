import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-12">
      <h1 className="text-2xl mb-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
