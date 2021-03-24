import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDreams } from "../../store/users";
import DreamCard from "../DreamCard";
import fetchSingleUserDream from "../../store/users";

import "./DreamList.css";


function UserDreamList({ user }) {

  const dispatch = useDispatch();

  const dreamsList = useSelector(state => {
    return state.users
  });

  const [deleteDream, setDeleteDream] = useState();


  useEffect(() => {
    dispatch(fetchUserDreams(user.id));
    setDeleteDream(false);
    // dispatch(fetchSingleUserDream(user.id, dream.id))
  }, [dispatch, user.id, deleteDream]);


  return (
    <div>
      {dreamsList.map(dream => {
        return (
          <div key={dream.id} className="dream-card_container">
            <DreamCard key={dream.id} user={user} dream={dream} setDeleteDream={setDeleteDream} />
          </div>
        )
      })}
    </div>
  );
}
export default UserDreamList;
