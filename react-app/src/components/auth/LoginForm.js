import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { login } from "../../services/auth";
import DemoButton from "./DemoButton";

const LoginForm = ({ authenticated, setAuthenticated }) => {

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to={"/"} />;
  }

  return (
    <div>
      <form 
      onSubmit={onLogin}
      className="login-page-form"
      >
        <div className="errors">
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div id="login">LOGIN</div>
        <br />
        <div>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <br />
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div className="login-button">
          <button type="submit">Login</button>
          <DemoButton setAuthenticated={setAuthenticated}/>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
