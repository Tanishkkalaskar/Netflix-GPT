import React from "react";
import { MOVIE_POSTER_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-48">
      <img alt="Movie poster" src={MOVIE_POSTER_CDN_URL + poster} />
    </div>
  );
};

export default MovieCard;
