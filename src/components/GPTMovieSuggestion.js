import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GPTMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="bg-black bg-opacity-90">
      {movieNames.map((movieName, index) => (
        <MovieList title={movieName} movies={movieResults?.[index]}></MovieList>
      ))}
    </div>
  );
};

export default GPTMovieSuggestion;
