import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
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


function DreamForm() {

    const dreamer = useSelector(state => {
       return state.session
    });

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [keywords, setKeywords] = useState("");
    const [notes, setNotes] = useState("");
    const [createdDream, setCreatedDream] = useState("")
    const dreamer_id = dreamer.id

    const onSubmit = async(e) => {
        e.preventDefault();
        const dream = await createDream(title, keywords, notes, dreamer_id)
        setTitle("");
        setKeywords("");
        setNotes("");
        setCreatedDream(dream)

    }
    
    useEffect(() => {
        dispatch(getCurrentUser())
        
        if (createdDream) {
            return <Redirect to={`/users/${dreamer_id}/dreams/${createdDream.id}`}/>
        };
        
        setCreatedDream("")

    }, [dispatch])

    
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
                ></textarea>
            </div>
            <div className="submit">
                <button type="submit">Save Dream</button>
            </div>
        </form>
    )
}

export default DreamForm;