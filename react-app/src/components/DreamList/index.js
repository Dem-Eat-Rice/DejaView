import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DreamForm from "../DreamForm";
import DreamPage from "../DreamPage";
import "./DreamList.css";

import { fetchUserDreams } from "../../store/users"

function UserDreamList({ user }) {

  const dispatch = useDispatch();
  const { userId, dreamId } = useParams();
  const dreams = useSelector(state => {
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
      <div>
        {dreams.map(dream => {
          return (
            <div className="dream-card">
              <h2>
                <Link 
                  to={`/users/${user.id}/dreams/${dream.id}`}
                  style={{textDecoration: 'none'}}
                  >
                  {dream.title}
                </Link>
              </h2>
              <h4>Keywords: </h4>
              <p style={{"white-space": "pre-line"}}>{dream.keywords}</p>
              <h4>Notes: </h4>
              <p style={{"white-space": "pre-line"}}>{dream.notes}</p>
              <br/>
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default UserDreamList;
