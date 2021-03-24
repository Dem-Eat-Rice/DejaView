import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import fetchSingleUserDream from "../../store/users";

function DreamCard({ user, dream, setDeleteDream, key }) {

    const dispatch = useDispatch();

    const [title, setTitle] = useState();
    const [keywords, setKeywords] = useState();
    const [notes, setNotes] = useState();
    const [editDream, setEditDream] = useState(false);

    useEffect(() => {
        setTitle(title);
        setKeywords(keywords);
        setNotes(notes);
    }, [editDream, dream, key])



    const editOnClick = async (e) => {
        e.preventDefault();
        setEditDream(true);
    }

    const cancelEditOnClick = () => {
        document.addEventListener("click", (e) => {
            console.log(e.target.className)
            if (editDream) {
                if (e.target.type === "text" || e.target.type === "submit" || e.target.type === "textarea" || e.target.className === "dream-card" || e.target.className === "") {
                    return null;
                } else {
                    setEditDream(false)
                }
            }
        })
    }

    const cancelEditButtonClick = (e) => {
        e.preventDefault();
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

    const deleteOnClick = async (e) => {
        e.preventDefault();
        const confirmation = window.confirm("Are you sure you want to delete this dream?");
        if (confirmation) {
            setDeleteDream(true);
            await fetch(`/api/dreams/${e.target.value}`, {
                method: "DELETE"
            });
        }
    }

    if (!editDream) {
        return (
            <div className="dream-card">
                <div className="dream-title">
                    <h2>
                    <Link to={`/users/${user.id}/dreams/${dream.id}`}>
                        {dream.title}
                    </Link>
                    </h2>
                </div>
                <div className="dream-keywords">
                    <h4>Keywords: </h4>
                    <p style={{ "whiteSpace": "pre-wrap" }}>
                        {dream.keywords}
                    </p>
                </div>
                <div className="dream-notes">
                    <h4>Notes: </h4>
                    <p style={{ "whiteSpace": "pre-wrap" }}>
                        {dream.notes}
                    </p>
                </div>
                <button className="edit-button" onClick={editOnClick}>Edit</button>
                <button value={dream.id} className="delete-button" onClick={deleteOnClick}>Delete</button>
            </div>
        )
    } else {
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
                    <br />
                </form>
                <button value={dream.id} onClick={saveOnClick}>Save</button>
                <button value={dream.id} onClick={cancelEditButtonClick}>Cancel</button>
            </div>
        )
    }
};

export default DreamCard;