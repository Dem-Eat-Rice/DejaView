import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSingleUserDream } from "../../store/users";


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

// still need something to post to dreams_fragments joins table I think?


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
        dispatch(fetchSingleUserDream(user.id, dream.id))

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
                style={{"resize": "none"}, {"white-space": "pre-line"}}
                ></textarea>
            </div>
            <div className="submit">
                <button type="submit">Save Dream</button>
            </div>
        </form>
    )
}

export default DreamForm;