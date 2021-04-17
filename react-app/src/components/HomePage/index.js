import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/session";
import DreamForm from "../DreamForm";
import DreamList from "../DreamList";
import "./HomePage.css";

function HomePage() {

    const dispatch = useDispatch();

    const user = useSelector(state => {
        return state.session
    })

    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        dispatch(getCurrentUser());
        setCurrentUser(user);
    }, [dispatch, currentUser])


    return (
        <div className="home-container">
            <div style={{ "height": "50px"}}></div>
            <div className="greeting">
                <h1>
                {user.name}
                </h1>
            </div>
            <h2>QuickStart</h2>
            <div className="tips">
                <h2>Tips</h2>
                <ul style={{ "overflow-wrap": "break-word" }}>
                    <li> Try to be in the same position that you woke up in </li>
                    <br />
                    <li> Try to recall any emotions and images first </li>
                    <br />
                    <li style={{ "font-weight": "bold" }}> Use this app to save what you remember! </li>
                </ul>
            </div>
            <div className="page-body">
                <div className="dream-form">
                    <DreamForm className="homepage-form" user={user} />
                </div>
            </div>
            <div className="dream-list">
                <h2>Dream Collection:</h2>
                <div className="sub-dream-list">
                    <DreamList user={user} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;