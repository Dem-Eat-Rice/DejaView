import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { fetchDream } from "../../store/dreams";
import { getDreamFragments } from "../../store/fragments";
import DreamForm from "../DreamForm";
import FragmentForm from "../FragmentForm";
import DreamCard from "../DreamCard";
import "./DreamPage.css";

function DreamPage() {

    const dispatch = useDispatch();
    const { userId, dreamId } = useParams();

    const currentDream = useSelector(state => {
        return state.dreams
    });

    const dreamFragments = useSelector(state => {
        return state.fragments
    });
    
    useEffect(() => {
        dispatch(fetchDream(dreamId));
        dispatch(getDreamFragments(dreamId));

    }, [dispatch, userId, dreamId]);

    return (
        <div className="dream-page-container">
            <h1> {currentDream.title}</h1>
            <div className="dream-header">
                <div className="keywords_fragment-page">
                    Reminders: 
                    <br />
                    <br />
                    {currentDream.keywords}
                </div>
                <div className="notes_fragment-page">
                    <br />
                    <br />
                    {currentDream.notes}
                </div>
            </div>
            <div className="dream-body">
                <div className="fragment-container">
                    <div className="emotions-frag">
                    </div>
                    <div className="setting-frag">
                    </div>
                    <div className="description-frag">
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