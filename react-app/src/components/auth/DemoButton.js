import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../services/auth";

function DemoButton ({ setAuthenticated }) {
    const email = "demo@aa.io";
    const password = "password";

    const handleClick = async(e) => {
        e.preventDefault();
        await login(email, password);
        setAuthenticated(true);
    }

    return (
        <div className="demo-button">
            <button onClick={handleClick} type="submit">Demo</button>
        </div>
    )
}

export default DemoButton;