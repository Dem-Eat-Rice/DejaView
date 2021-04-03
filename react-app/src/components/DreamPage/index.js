import React, { useState, useEffect } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { fetchSingleUserDream } from "../../store/users";
import { getCurrentUser } from "../../store/session";
import { fetchDream, getDreamFragments } from "../../store/dreams";
import DreamForm from "../DreamForm";
import FragmentForm from "../FragmentForm";
import "./DreamPage.css";

function DreamPage() {

    const dispatch = useDispatch();
    const { userId, dreamId } = useParams();

    const [dream, setDream] = useState();


    const fetchDream = async(dreamId) => {
        const response = await fetch(`api/dreams/${dreamId}`)
        const dream = response.json()
        return await dream
    }

    useEffect(() => {
        fetchDream(dreamId)
    }, [dispatch, userId, dreamId]);

    return (
        <div className="dream-page-container">
            <h1> What's on your mind?... </h1>
            {/* <div style={{"color":"white"}}>{dream.title}</div> */}
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