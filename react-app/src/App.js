import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import UserDreamList from "./components/DreamList";
import DreamPage from "./components/DreamPage";
import HomePage from "./components/HomePage";
import SplashPage from "./components/SplashPage";
// import HomePageSelector from "./components/HomePageSelector"
import LoginPage from "./components/auth/LoginPage";
import SignUpPage from "./components/auth/SignUpPage";
import Footer from "./components/Footer";
import { getCurrentUser } from "./store/session";
import { authenticate } from "./services/auth";
import { useSelector } from "react-redux";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const currentUser = useSelector(state => {
    return state.session;
  })

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
    getCurrentUser();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} user={currentUser} />
      <Switch>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <SplashPage />
        </ProtectedRoute>
        <Route path="/login" exact={true}>
          <LoginPage
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpPage authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <UserDreamList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId/dreams/:dreamId" exact={true} authenticated={authenticated}>
          <DreamPage />
        </ProtectedRoute>
        {/* <ProtectedRoute path="/dreams/create" exact={true} authenticated={authenticated}>
          <DreamForm />
        </ProtectedRoute> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
