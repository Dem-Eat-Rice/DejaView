import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDreams } from "../../store/users";
import DreamCard from "../DreamCard";
import "./DreamList.css";


function UserDreamList({ user }) {

  const dispatch = useDispatch();

  const dreamsList = useSelector(state => {
    return state.users
  })

  const [deleteDream, setDeleteDream] = useState(true);


  useEffect(() => {
    dispatch(fetchUserDreams(user.id))
  }, [dispatch, user.id, deleteDream]);

  const deleteOnClick = async (e) => {
    e.preventDefault();
    const confirmation = window.confirm("Are you sure you want to delete this dream?");
    if (confirmation) {
        setDeleteDream("");
        await fetch(`/api/dreams/${e.target.value}`, {
            method: "DELETE"
        });
    }
}

  return (
    <div>
      {dreamsList.map(dream => {
        return (
          <div className="dream-card_container">
            <DreamCard user={user} dream={dream} />
            <button value={dream.id} className="delete-button" onClick={deleteOnClick}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}
export default UserDreamList;
