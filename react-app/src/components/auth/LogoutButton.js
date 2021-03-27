import React from "react";
import { logout } from "../../services/auth";

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return <div>
    <a onClick={onLogout}>
      <img src={"https://icons8.com/icon/52533/icon"} />
    </a>
    </div>;
};

export default LogoutButton;
