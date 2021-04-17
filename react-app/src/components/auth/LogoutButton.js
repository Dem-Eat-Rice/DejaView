import React from "react";
import { logout } from "../../services/auth";
import { Redirect } from "react-router-dom";

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    };

  return <button id="nav-button" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
