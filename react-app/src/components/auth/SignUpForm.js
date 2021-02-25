import React, { useState } from "react";
import { Redirect, Link } from 'react-router-dom';
import { signUp } from '../../services/auth';

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(name, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <form 
      onSubmit={onSignUp}
      className="signup-page-form"
      >
        <div id="signup">SIGN-UP</div>
        <br />
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={updateName}
            value={name}
          ></input>
        </div>
        <br />
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <br />
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <br />
        <div>
          <input
            type="password"
            name="repeat_password"
            placeholder="Confirm Password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <br />
        <div  className="signup-button">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div>
      <Link to="/login">
        Already have an account?
      </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
