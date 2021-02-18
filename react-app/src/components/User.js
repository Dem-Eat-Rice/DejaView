import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DreamForm from "./DreamForm";
import DreamPage from "./DreamPage";

function User() {
  const [user, setUser] = useState({});
  const [form, setForm] = useState([])
  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  useEffect(() => {
    setForm(DreamForm)
  })

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Name</strong> {user.name}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
      <DreamPage />
    </ul>
  );
}
export default User;
