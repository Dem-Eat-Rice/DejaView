import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/session";
import { fetchUserDreams } from "../../store/users";
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
        <div>
            <h1>Hello {user.name}...</h1>
            <h2>QuickStart</h2>
            <div className="dream-form">
                <DreamForm className="homepage-form" user={user} />
                <DreamList user={user}/>
            </div>
        </div>
    )
}

export default HomePage;