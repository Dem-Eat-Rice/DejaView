import React, { useState, useEffect } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDreams } from "../../store/users";
import { getCurrentUser } from "../../store/session";
import DreamForm from "../DreamForm";

function DreamPage() {
    
    const currentUser = useSelector(state => {
        return state.session
    })

    const userDreams = useSelector(state => {
        return state.users
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentUser());
        dispatch(fetchUserDreams(currentUser.id))
    }, [dispatch, currentUser.id])

    return (
        <>
            <div className="dream-header">
                <h1> Dreams, Dreams, Dreams... </h1>
                {userDreams.map(dream => {
                    return (
                        <h1 key={dream.id}>{dream.title}</h1>
                    )
                })}

            </div>
            <div className="dream-body">
                <div className="fragment-container">
                </div>
            </div>
        </>
    )
}

export default DreamPage;