import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDreams } from "../../store/users";
import DreamCard from "../DreamCard";

import "./DreamList.css";


function UserDreamList({ user }) {

  const dispatch = useDispatch();

  const dreamsList = useSelector(state => {
    return state.users
  });

  const [deleteDream, setDeleteDream] = useState();
  const [editTitle, setEditTitle] = useState();
  const [editKeywords, setEditKeywords] = useState();
  const [editNotes, setEditNotes] = useState();
 
  useEffect(() => {
    dispatch(fetchUserDreams(user.id));
    setDeleteDream(false);
    setEditTitle(false);
    setEditKeywords(false);
    setEditNotes(false)
  }, [dispatch, user.id, deleteDream, editTitle, editKeywords, editNotes]);

  return (
    <div>
      {dreamsList.map(dream => {
        return (
          <div key={dream.id} className="dream-card_container">
            <DreamCard 
            user={user} 
            dream={dream}
            setDeleteDream={setDeleteDream} 
            setEditTitle={setEditTitle}
            setEditKeywords={setEditKeywords}
            setEditNotes={setEditNotes}
            />
          </div>
        )
      })}
    </div>
  );
}
export default UserDreamList;
