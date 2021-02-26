import React, { useState, useEffect } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { fetchSingleUserDream } from "../../store/users";
import { getCurrentUser } from "../../store/session";
import { getDreamFragments } from "../../store/dreams";
import DreamForm from "../DreamForm";
import FragmentForm from "../FragmentForm";
import "./DreamPage.css";

function DreamPage() {

    const { userId, dreamId } = useParams();

    const dreamsFragments = useSelector(state => {
        return state.dreams
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSingleUserDream(userId, dreamId))
    }, [dispatch, userId, dreamId])

    return (
        <div className="dream-page-container">
            <h1> Dreams, Dreams, Dreams... </h1>
            <div className="dream-header">
            </div>
            <div className="dream-body">
                <div className="fragment-container">
                    <div className="input-frag">
                    </div>
                    <div className="input-frag">
                    </div>
                    <div className="input-frag">
                    </div>
                </div>
                <div className="fragment-container">
                    <div className="input-frag">
                    </div>
                    <div className="input-frag">
                    </div>
                </div>
                <div className="fragment-container">
                </div>
                <div className="fragment-container">
                </div>
            </div>                         
        </div>
    )
}

export default DreamPage;