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
  const [dreamListReset, setDreamListReset] = useState();

 
  useEffect(() => {
    dispatch(fetchUserDreams(user.id));
    setDeleteDream(false);
    setEditTitle(false);
    setEditKeywords(false);
    setEditNotes(false);
    setDreamListReset(dreamsList)
  }, [dispatch, user.id, deleteDream, editTitle, editKeywords, editNotes, dreamListReset]);
  
  return (
    <div>
      {dreamsList.length ? dreamsList.map(dream => {
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
      })
      : <div className="dream-card_placeholder">Your dreams will be logged here!</div>
      }
    </div>
  );
}
export default UserDreamList;
