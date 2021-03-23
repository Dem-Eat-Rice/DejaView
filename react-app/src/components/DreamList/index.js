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


  useEffect(() => {
    dispatch(fetchUserDreams(user.id))
    setDeleteDream(false)
  }, [dispatch, user.id, deleteDream]);


  return (
    <div>
      {dreamsList.map(dream => {
        return (
          <div className="dream-card_container">
            <DreamCard user={user} dream={dream} setDeleteDream={setDeleteDream} />
          </div>
        )
      })}
    </div>
  );
}
export default UserDreamList;
