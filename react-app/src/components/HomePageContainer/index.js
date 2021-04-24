import React from "react";
import HomePage from "../HomePage";
import SplashPage from "../SplashPage";


function HomePageContainer({ authenticated, currentUser }) {

  if (authenticated) {
    return (
      <HomePage user={currentUser} />
    );
  } else {
    return (
      <SplashPage />
    )
  }
};

export default HomePageContainer;