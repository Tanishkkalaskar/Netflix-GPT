import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieResults } from "../utils/GPTSlice";
import language from "../utils/LanguagesConstants";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearch = async () => {
    const GPTSearchQuery =
      "Act like a movie recommendation system and suggest some movies for the given query: " +
      searchText.current.value +
      ". Only give me 5 movies, comma separated like given in the example ahead: Gadar, Yeh Jawani Hai Diwani, Koi Mil Gaya, Sholay, Kal ho na ho";

    const GPTSearchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: GPTSearchQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!GPTSearchResults?.choices) return "error";
    const GPTRecommendations =
      GPTSearchResults.choices?.[0]?.message?.content.split(", ");
    const promiseArray = GPTRecommendations.map((movie) => searchMovie(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addMovieResults({
        movieNames: GPTRecommendations,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="flex justify-center px-4 pt-[60%] md:pt-[10%] mb-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col w-full items-center md:flex-row md:w-1/2 md:gap-4 bg-black p-4"
      >
        <input
          ref={searchText}
          className="p-4 w-full mb-1 border border-black"
          placeholder={language[langKey].searchPlaceholder}
        />
        <button
          className="p-4 md:w-[20%] bg-red-700 text-white rounded-md"
          onClick={handleGPTSearch}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
