import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "./logo.png";
import './NavBar.css';

const NavBar = ({ authenticated, setAuthenticated, user }) => {
  const history = useHistory();

  if (authenticated) {
    return (
      <>
        <div className="navlogo">
          <div className="home">
            <NavLink to="/">
              <img
                className="header_logo"
                onClick={() => history.push('/')}
                src={logo}
                alt=""
                />
            </NavLink>
            <NavLink to="/">
              <h1>DejaView</h1>
            </NavLink>
          </div>
            <SearchBar user={user}/>
          <nav>
            <div>
                <LogoutButton setAuthenticated={setAuthenticated} />
            </div>
          </nav>
        </div>
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
          <NavLink to="/">
            <h1>DejaView</h1>
          </NavLink>
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
          </ul>
        </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;