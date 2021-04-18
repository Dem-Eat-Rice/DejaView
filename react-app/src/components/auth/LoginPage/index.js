import React from "react";
import LoginForm from "../LoginForm";
import "./LoginPage.css";
import { Link } from "react-router-dom";


function LoginPage({ authenticated, setAuthenticated }) {

    return (
        <div className="page-container">
            <div className="login-form">
                <LoginForm
                    authenticated={authenticated}
                    setAuthenticated={setAuthenticated} />
            </div>
            <div className="signup-link">
                <Link to="/sign-up">
                    Create an Account
                </Link>
            </div>
        </div>
    )
}

export default LoginPage;
