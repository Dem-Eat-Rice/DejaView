import React, { useState, useEffect } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleUserDream } from "../../store/users";
import { getCurrentUser } from "../../store/session";
import DreamForm from "../DreamForm";

function DreamPage() {

    const { userId, dreamId } = useParams();

    const userDream = useSelector(state => {
        return state.users
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSingleUserDream(userId, dreamId))
    }, [dispatch, userId, dreamId])

    return (
        <>
            <div className="dream-header">
                <h1> Dreams, Dreams, Dreams... </h1>
            </div>
            <div className="dream-body">
                <div className="fragment-container">
                </div>
            </div>
        </>
    )
}

export default DreamPage;