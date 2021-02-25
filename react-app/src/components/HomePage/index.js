import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/session";
import { fetchSingleUserDream, fetchUserDreams } from "../../store/users";
import DreamForm from "../DreamForm";
import DreamList from "../DreamList";
import "./HomePage.css";

function HomePage() {

    const dispatch = useDispatch();

    const user = useSelector(state => {
        return state.session
    })


    useEffect(() => {
        dispatch(getCurrentUser(user.id))
        dispatch(fetchUserDreams(user.id))
        
    }, [dispatch]) 

    return (
        <div className="home-container">
            <h1>Hello {user.name}...</h1>
            <h2>QuickStart</h2>
            <div className="page-body">
                <div className="dream-form">
                    <DreamForm className="homepage-form" user={user} />
                </div>
            </div>
            <div className="tips">
                            <h2>Tips</h2>
                        <ul style={{"overflow-wrap": "break-word"}}>
                            <li> Try to be in the same position that you woke up in </li>
                            <br/>
                            <li> Try to recall any emotions and images </li>
                            <br/>
                            <li style={{"font-weight":"bold"}}> Use this app to save it all! </li>
                        </ul>
                    </div>
            <div className="dream-list">
                <h2>Dream Collection:</h2>
                <div className="sub-dream-list">
                    <DreamList user={user}/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;