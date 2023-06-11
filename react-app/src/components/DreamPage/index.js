import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FragmentList from "../FragmentList";
import { fetchDream } from "../../store/dreams";
import { getDreamFragments } from "../../store/fragments";
import FragmentForm from "../FragmentForm";
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

    const [fragments, setFragments] = useState();

    useEffect(() => {
        dispatch(fetchDream(dreamId));
        dispatch(getDreamFragments(dreamId));

    }, [dispatch, userId, dreamId]);

    const onDragEnd = result => {
        console.log('hello', result)
    }

    return (
        <div className="dream-page-container">
            <h1> {currentDream.title}</h1>
            <div className="dream-header">
                <div className="fragment-form_container">
                    <FragmentForm dreamFragments={dreamFragments} setFragments={setFragments} />
                </div>
                <div className="reminders_fragment-page">
                    Reminders:
                    <br />
                    <br />
                    {currentDream.keywords}
                    <br />
                    <br />
                    {currentDream.notes}
                </div>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable-area">
                    {(provided) => (
                        <div 
                        className="dream-body"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                            <FragmentList fragments={dreamFragments} />
                            {provided.placeholder}
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