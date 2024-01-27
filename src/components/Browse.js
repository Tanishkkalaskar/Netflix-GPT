import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearchPage from "./GPTSearchPage";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const showGPTSearchPage = useSelector((store) => store.gpt.showGPTSearchPage);

  return (
    <div>
      <Header></Header>
      {showGPTSearchPage ? (
        <GPTSearchPage></GPTSearchPage>
      ) : (
        <>
          <MainContainer></MainContainer>
          <SecondaryContainer></SecondaryContainer>
        </>
      )}
    </div>
  );
};

export default Browse;
