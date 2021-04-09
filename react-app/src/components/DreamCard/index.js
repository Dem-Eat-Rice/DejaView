import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DreamCard({ user, dream, setDeleteDream, setEditTitle, setEditKeywords, setEditNotes }) {


    const [title, setTitle] = useState();
    const [keywords, setKeywords] = useState();
    const [notes, setNotes] = useState();
    const [editDream, setEditDream] = useState(false);

    useEffect(() => {
        setTitle(title);
        setKeywords(keywords);
        setNotes(notes);
    }, [editDream, dream, title, keywords, notes])



    const editOnClick = async (e) => {
        e.preventDefault();
        setEditDream(true);
    }

    const cancelEditOnClick = () => {
        document.addEventListener("click", (e) => {
            if (editDream) {
                if (e.target.type === "text" || e.target.type === "submit" || e.target.type === "textarea" || !e.target.className) {
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

        setEditTitle(true);
        setEditKeywords(true);
        setEditNotes(true)
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
                    {dream.title !== "" ? <Link to={`/users/${user.id}/dreams/${dream.id}`}>
                        {dream.title}
                    </Link>
                    :
                    <Link to={`/users/${user.id}/dreams/${dream.id}`}>
                        {dream.created_at}
                    </Link>}
                    </h2>
                </div>
                <div className="sub-titles">
                    <h3>Keywords </h3>
                    <h3>Notes </h3>
                </div>
                <div className="dream-card_body">
                    <div className="dream-keywords">
                        <p style={{ "whiteSpace": "pre-wrap" }}>
                            {dream.keywords}
                        </p>
                    </div>
                    <div className="vert-line"></div>
                    <div className="dream-notes">
                        <p style={{ "whiteSpace": "pre-wrap" }}>
                            {dream.notes}
                        </p>
                    </div>

                </div>
                <div className="dream-card_buttons">
                    <button className="edit-button" onClick={editOnClick}>Edit</button>
                    <button value={dream.id} className="delete-button" onClick={deleteOnClick}>Delete</button>
                </div>
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
                            onFocus={(e) => e.target.placeholder = ""}
                            onBlur={(e) => e.target.placeholder = dream.title}
                        ></input>
                    </h2>
                    <h3>Keywords: </h3>
                    <textarea
                        placeholder={dream.keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        onFocus={(e) => e.target.placeholder = ""}
                        onBlur={(e) => e.target.placeholder = dream.keywords}
                        rows="3" cols="50"

                    />
                    <h3>Notes: </h3>
                    <textarea
                        placeholder={dream.notes}
                        onChange={(e) => setNotes(e.target.value)}
                        onFocus={(e) => e.target.placeholder = ""}
                        onBlur={(e) => e.target.placeholder = dream.notes}
                        rows="5" cols="100"
                    />
                    <br />
                </form>
                <div className="dream-card_buttons">
                    <button value={dream.id} type="submit" className="save-button" onClick={saveOnClick}>Save</button>
                    <button value={dream.id} className="cancel-button" onClick={cancelEditButtonClick}>Cancel</button>
                </div>
            </div>
        )
    }
};

export default DreamCard;