import React from "react";
import "./SplashPage.css";
import { useHistory } from "react-router-dom";

function SplashPage () {

    return (
        <div className="splash-page-container">
            <div className="app-intro">
                <div className="intro">
                    Have you ever had trouble remembering a dream?
                <br />
                <br />
                Welcome to DejaView,
                <br />
                an app to help you record, organize, and
                <br />
                recall your dreams~
                </div>
                <div className="start-button">Let's get to it!</div>
            </div>
        </div>
    )
}

export default SplashPage;
