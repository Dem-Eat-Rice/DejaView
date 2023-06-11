import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FragmentForm } from "../FragmentForm";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import FragmentCard from "../FragmentCard"
import "./FragmentList.css";

function FragmentList({ fragments }) {

  const dispatch = useDispatch();
  const currentDream = useSelector(state => {
    return state.dreams
  })

  const [deleteDream, setDeleteDream] = useState();
  const [editDream, setEditDream] = useState(false);
  const [editTitle, setEditTitle] = useState();
  const [editSetting, setEditSetting] = useState();
  const [editEmotions, setEditEmotions] = useState();
  const [editDescription, setEditDescription] = useState();

  useEffect(() => {
    setDeleteDream(false);
    setEditTitle(false);
    setEditSetting(false);
    setEditEmotions(false);
    setEditDescription(false);
  }, [dispatch, editDream, deleteDream, editTitle, editSetting, editEmotions, editDescription]);

  const deleteOnClick = async (e) => {
    e.preventDefault();
    setDeleteDream("");
    await fetch(`/api/fragments/${e.target.value}`, {
      method: "DELETE"
    });
  }
  const editOnClick = async (e) => {
    e.preventDefault();
    setEditDream(true);
  }

  const saveOnClick = async (e) => {
    e.preventDefault();
    await fetch(`/api/fragments/${e.target.value}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        editTitle,
        editSetting,
        editEmotions,
        editDescription
      })
    })
    setEditTitle(editTitle);
    setEditSetting(editSetting);
    setEditEmotions(editEmotions);
    setEditDescription(editDescription);
    setEditDream(false);
  }


  return (
    <Droppable 
    droppableId="droppable-area"
    direction="horizontal"
    >
      {(provided) => (
        <div className="fragment-container"
        ref={provided.innerRef}
        {...provided.droppableProps}
        >
          {fragments.map((fragment, index) => {
            return (
              <Draggable draggableId={"draggable-" + fragment.id} index={index} key={fragment.id}>
                {(provided) => (
                  <div 
                  className="sub-fragment-container"
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  >
                    <FragmentCard 
                    fragment={fragment} 
                    index={index}
                    />
                  </div>
                )}
              </ Draggable>
            )
          })}
          {provided.placeholder}
        </div>

      )}
    </Droppable>
  )
}
export default FragmentList;
