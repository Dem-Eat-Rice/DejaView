import React from "react";
import HomePage from "../HomePage";
import SplashPage from "../SplashPage";


function HomePageContainer({ authenticated }) {

  const homePageSelector = () => {
  if (authenticated) {
    return (
      <HomePage />
    );
  } else {
    return (
      <SplashPage />
    )
  }
}

  return (
    <div className="potato">
      {homePageSelector()}
    </div>
    )
};

export default HomePageContainer;