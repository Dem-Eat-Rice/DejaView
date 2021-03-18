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

  


  const [deleteDream, setDeleteDream] = useState();
  const [editDream, setEditDream] = useState(false);
  const [holdValue, setHoldValue] = useState() 
  const [title, setTitle] = useState();
  const [keywords, setKeywords] = useState();
  const [notes, setNotes] = useState();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setDeleteDream();
    dispatch(fetchUserDreams(user.id))

  }, [dispatch, editDream, user.id, deleteDream, title, keywords, notes]);
  
  if (!user) {
    return null;
  }

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
  const editOnClick = async (e) => {
    e.preventDefault();

    setHoldValue(e.target.value);
    setEditDream(true);
  }


  const cancelEditOnClick = (e) => {
    if (editDream) {
      document.addEventListener("click", (e) => {
        if (e.target.type === "text" || e.target.type === "submit" || e.target.type === "textarea") {
          return null;
        } else {
          setEditDream(false)
        }
      })
    }
  }

  const cancelEditButtonClick = (e) => {
      setEditDream(false)
  }

  const saveOnClick = async (e) => {
    e.preventDefault();
    await fetch(`/api/dreams/${e.target.value}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        keywords,
        notes
      })
    })
    setTitle(title);
    setKeywords(keywords);
    setNotes(notes);
    setEditDream(false);
  }

  if (editDream === false) {
    // const editButton = document.getElementsByClassName("edit-button");
    // console.log(editButton)
    
    return (
        <div>
          {dreams.map(dream => {
            const currentDiv = document.getElementsByClassName("edit-button")  

            // console.log(holdValue)
            return (
                <div key={`${dream.id}`} className="dream-card">
                  <h2>
                    <Link 
                      to={`/users/${user.id}/dreams/${dream.id}`}
                      // style={{textDecoration: 'none'}}
                      > 
                      {dream.title}
                    </Link>
                    {/* <IndividualDream user={user} dream={dream}/> */}
                  </h2>
                  <h4>Keywords: </h4>
                  <p style={{"whiteSpace": "pre-wrap"}}>{dream.keywords}</p>
                  <h4>Notes: </h4>
                  <p style={{"whiteSpace": "pre-wrap"}}>{dream.notes}</p>
                  <br/>
                  <button value={currentDiv} id="potato" className="edit-button" onClick={editOnClick}>Edit</button>
                  <button value={dream.id} onClick={deleteOnClick}>Delete</button>
                </div>
            )
          })}
        </div>
    );
  } else {
    return (
      <div>
        {dreams && dreams.map(dream => {
          return (
              <div key={dream.id} onClick={cancelEditOnClick} className="dream-card">
                <form>
                  <h2>
                  <h4>Title</h4>
                  <input 
                  id={`${dream.id}`}
                  placeholder={dream.title}
                  onChange={(e) => setTitle(e.target.value)}
                  ></input>
                  </h2>
                  <h4>Keywords: </h4>
                    <textarea 
                    placeholder={dream.keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    rows="3" cols="50"
                    />
                  <h4>Notes: </h4>
                    <textarea 
                    placeholder={dream.notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows="5" cols="100"
                    />
                  <br/>
                  <button value={dream.id} type="submit" onClick={saveOnClick}>Save</button>
                </form>
                <button value={dream.id} onClick={cancelEditButtonClick}>Cancel</button>
              </div>
          )
        })}
      </div>
  );  }
}
export default UserDreamList;
