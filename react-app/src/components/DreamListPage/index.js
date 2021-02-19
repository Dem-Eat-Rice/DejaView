import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DreamForm from "../DreamForm";
import DreamPage from "../DreamPage";
import "./DreamList.css";

import { fetchUserDreams } from "../../store/users"

function User() {

  const dispatch = useDispatch();
  const dreams = useSelector(state => {
    return state.users
  })

  const [user, setUser] = useState({});

  const { userId }  = useParams();
  

  useEffect(() => {
    if (!userId) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
      dispatch(fetchUserDreams(userId))
    })();
  }, [userId]);
  
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
                  to={`/users/${userId}/dreams/${dream.id}`}
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
export default User;
