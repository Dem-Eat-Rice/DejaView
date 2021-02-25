import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useHistory } from "react-router-dom";
import './NavBar.css';
import logo from "./logo.png";

const NavBar = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  if (authenticated) {
    return (
      <>
        <div className="home">
          <NavLink to="/">
            <img
              className="header_logo"
              onClick={() => history.push('/')}
              src={logo}
              alt=""
            />
          </NavLink>
        </div>
        <nav>
          <div>
              <NavLink to="/" exact={true} activeClassName="active">
                <p>
                  Home  
                </p>
              </NavLink>
              <LogoutButton setAuthenticated={setAuthenticated} />
          </div>
        </nav>
      </>
    );
  } else {
    return (
      <div className="page">
        <div className="home">
          <NavLink to="/login">
            <img
              className="header_logo"
              onClick={() => history.push('/')}
              src={logo}
              alt=""
            />
          </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact={true} activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" exact={true} activeClassName="active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                Sign Up
              </NavLink>
            </li>
            <li>
              <LogoutButton className="logout-button"setAuthenticated={setAuthenticated} />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;