import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/session";
import DreamForm from "../DreamForm";

function HomePage() {

    const user = useSelector(state => {
        return state.session
    })

    return (
        <>
            <h1>Hello {user.name}</h1>
            <h2>QuickStart</h2>
            <DreamForm />
        </>
    )
}

export default HomePage;