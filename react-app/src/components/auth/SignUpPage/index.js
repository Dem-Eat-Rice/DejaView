import React from "react";
import SignUpForm from "../SignUpForm";
import "./SignUpPage.css"

function SignUpPage({ authenticated, setAuthenticated}) {
    return (
        <div className="signup-page-container">
            <div className="signup-form">
                <SignUpForm 
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                />
            </div>
        </div>
    )
}

export default SignUpPage;