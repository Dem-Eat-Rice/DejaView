import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import UserDreamList from "./components/DreamList";
import DreamPage from "./components/DreamPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/auth/LoginPage";
import { authenticate } from "./services/auth";
import SignUpPage from "./components/auth/SignUpPage";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <Switch>
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
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId/dreams/:dreamId" exact={true} authenticated={authenticated}>
          <DreamPage />
        </ProtectedRoute>
        {/* <ProtectedRoute path="/dreams/create" exact={true} authenticated={authenticated}>
          <DreamForm />
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
