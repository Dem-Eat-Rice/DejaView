import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDreams } from "../../store/users";
import DreamCard from "../DreamCard";
import "./DreamList.css";


function UserDreamList({ user }) {

  const dispatch = useDispatch();
  const dreamsList = useSelector(state => {
    return state.users
  })

  useEffect(() => {
    dispatch(fetchUserDreams(user.id))

  }, [dispatch, user.id]);

  if (!user) {
    return null;
  }

  return (
    <div>
      {dreamsList.map(dream => {
        return (
          <div className="dream-card_container">
            <DreamCard user={user} dream={dream} dreamsList={dreamsList} />
          </div>
        )
      })}
    </div>
  );
}
export default UserDreamList;
