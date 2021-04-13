import React from "react";
import "./SplashPage.css";
import { useHistory } from "react-router-dom";

function SplashPage () {

    const history = useHistory();

    return (
        <div className="splash-page-container">
            <div className="app-intro">
                <div className="intro">
                    <span>Have you ever had trouble remembering a dream?</span>
                <br />
                <br />
                <span>Welcome to</span> <span style={{"font-family":"cursive", "font-weight": "bold", "color":"whitesmoke", "text-decoration":"underline"}}>DejaView</span>,
                <br />
                <span>an app to help you record, organize, and</span>
                <br />
                <span>recall your dreams~</span>
                </div>
                <div 
                className="start-button"
                onClick={(e) => history.push("/login")}
                >Get Started Here!
                </div>
            </div>
        </div>
    )
}

export default SplashPage;
