import React from "react";
import LoginForm from "../LoginForm";
import "./LoginPage.css";


function LoginPage ({ authenticated, setAuthenticated}) {

    return (
        <div className="page-container">
            <div className="login-form">
                <LoginForm 
                authenticated={authenticated} 
                setAuthenticated= {setAuthenticated}/>
            </div>
        </div>
    )
}

export default LoginPage;
