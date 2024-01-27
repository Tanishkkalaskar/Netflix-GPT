import React from "react";
import { AUTH_BG } from "../utils/constants";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10 h-screen min-h-screen opacity-97">
        <img className="min-h-full min-w-full" src={AUTH_BG} alt="background" />
      </div>
      <GPTSearchBar></GPTSearchBar>
      <GPTMovieSuggestion></GPTMovieSuggestion>
    </div>
  );
};

export default GPTSearchPage;
