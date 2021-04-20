import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FragmentList from "../FragmentList";
import { fetchDream } from "../../store/dreams";
import { getDreamFragments } from "../../store/fragments";
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
            <DragDropContext>
                <Droppable droppableId="whole-fragments">
                    {(provided) => (
                        <div className="dream-body"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {/* <Draggable index="0"
                                draggableId="0"
                            >
                                {(provided) => (
                                        <div className="fragment-container"
                                        style={{"color":"white"}}
                                            ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                                        >HELLO</div>
                                )}
                            </Draggable>

                            <Draggable index="1"
                                draggableId="1"
                            >
                                {(provided) => (
                                    <div className="fragment-container"
                                    ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                                    >GOODBYE</div>
                                )}
                            </Draggable> */}
                            <FragmentList />
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default DreamPage;

{/* 
Starting here. For everything inside of "dreamFragments",
I want to display a fragment-container
inside of that fragment-container should be 
    -A Form
        -Each form will be composed of the input components

    I would pass in the correct functions/state from the 
    FragmentList(index.js) to each of the form input components...I think? 

    for each fragment in the fragmentList
    you'll create a 
    <div fragment container>
        <FragmentCard /> 
    <div fragment container />
    The FragmentCard will be a 

    First, display the information
    Second, make it draggable
    Third, make it editable.
*/}