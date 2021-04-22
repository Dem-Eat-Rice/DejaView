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
  const [title, setTitle] = useState();
  const [keywords, setKeywords] = useState();
  const [notes, setNotes] = useState();

  useEffect(() => {
    setDeleteDream();
  }, [dispatch, editDream, deleteDream, title, keywords, notes]);

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
        title,
        keywords,
        notes
      })
    })
    setTitle(title);
    setKeywords(keywords);
    setNotes(notes);
    setEditDream(false);
  }


  return (
    <DragDropContext>
      {fragments.map((fragment, index) => {
        return (
          <div className="fragment-container">
            <FragmentCard fragment={fragment} />
          </div>
        )
      })}
    </DragDropContext>
  )
}
export default FragmentList;
