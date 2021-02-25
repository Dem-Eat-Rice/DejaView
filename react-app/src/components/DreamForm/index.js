import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { getCurrentUser } from "../../store/session";


const createDream = async (title, keywords, notes, dreamer_id) => {
    const response = await fetch("/api/dreams/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            keywords,
            notes,
            dreamer_id
        }),
    });
    return await response.json();
};


function DreamForm({ user }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [keywords, setKeywords] = useState("");
    const [notes, setNotes] = useState("");
    const [createdDream, setCreatedDream] = useState("");
    const dreamer_id = user.id;

    const onSubmit = async(e) => {
        e.preventDefault();
        const dream = await createDream(title, keywords, notes, dreamer_id)
        setTitle("");
        setKeywords("");
        setNotes("");
        setCreatedDream(dream)
        history.push(`/users/${dreamer_id}/dreams/${dream.id}`)

    }
    
    return (
        <form onSubmit={onSubmit}>
            <div className="title">
                <label>Title</label>
                <br />
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                ></input>
            </div>
            <div className="keywords">
                <label>Keywords</label>
                <br />
                <input
                    type="text"
                    name="keywords"
                    value={keywords}
                    onChange={e => setKeywords(e.target.value)}
                ></input>
            </div>
            <div className="notes">
                <label>Notes...</label>
                <br />
                <textarea
                type="text"
                name="notes"
                value={notes}
                onChange={e => setNotes(e.target.value)}
                rows="5" cols="35"
                ></textarea>
            </div>
            <div className="submit">
                <button type="submit">Save Dream</button>
            </div>
        </form>
    )
}

export default DreamForm;