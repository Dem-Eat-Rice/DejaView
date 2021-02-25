import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DreamForm from "../DreamForm";
import DreamPage from "../DreamPage";
import "./DreamList.css";

import { fetchUserDreams } from "../../store/users"

function UserDreamList({ user }) {

  const dispatch = useDispatch();
  
  const dreams = useSelector(state => {
    return state.users
  })

  useEffect(() => {
    if (!user.id) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${user.id}`);
      user = await response.json();
    })();
    dispatch(fetchUserDreams(user.id))
  }, [dispatch, user.id]);
  
  if (!user) {
    return null;
  }

  return (
    <div>
      <ul>
        <li>
          <strong>Name</strong> {user.name}
        </li>
        <li>
          <strong>Email</strong> {user.email}
        </li>
      </ul>
      <div>
        {dreams.map(dream => {
          return (
            <div>
              <h2>
                <Link 
                  to={`/users/${user.id}/dreams/${dream.id}`}
                  style={{textDecoration: 'none'}}
                  >
                  {dream.title}
                </Link>
              </h2>
              <h4>Keywords: {dream.keywords}</h4>
              <h4>Notes: {dream.notes}</h4>
              <br/>
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default UserDreamList;
