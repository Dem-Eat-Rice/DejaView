import React from "react";
import HomePage from "../HomePage";
import SplashPage from "../SplashPage";


function HomePageContainer({ authenticated }) {

  if (authenticated) {
    return (
      <HomePage />
    );
  } else {
    return (
      <SplashPage />
    )
  }
};

export default HomePageContainer;