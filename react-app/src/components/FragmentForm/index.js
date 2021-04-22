import React, { useState } from "react";
import { getDreamFragments } from "../../store/fragments";
import { useDispatch } from "react-redux";
// import Title from "./FormComponents/title";
// import Emotions from "./FormComponents/emotions";
// import Setting from "./FormComponents/setting";
// import Description from "./FormComponents/description";
import { useParams } from "react-router";


const createFragment = async (title, emotions, setting, description, user_id) => {
    const response = await fetch("/api/fragments/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            emotions,
            setting,
            description,
            user_id
        }),
    });
    return await response.json();

}


function FragmentForm({ dreamFragemnts, setFragments }) {

    const { userId, dreamId } = useParams();

    const [title, setTitle] = useState("");
    const [emotions, setEmotions] = useState("");
    const [setting, setSetting] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        await createFragment(title, emotions, setting, description, userId)
        setTitle("");
        setEmotions("");
        setSetting("");
        setDescription("");
        dispatch(getDreamFragments(dreamId))
        console.log("hello")

    }

    return (
        <form onSubmit={onSubmit} className="fragment-form">
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
            <div className="emotions">
                <label>Emotions</label>
                <br />
                <input
                    type="text"
                    name="emotions"
                    value={emotions}
                    onChange={e => setEmotions(e.target.value)}
                ></input>
            </div>
            <div className="setting">
                <label>Setting</label>
                <br />
                <input
                    type="text"
                    name="setting"
                    value={setting}
                    onChange={e => setSetting(e.target.value)}
                ></input>
            </div>
            <div className="description">
                <label>Description</label>
                <br />
                <textarea
                    type="text"
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    rows="5" cols="35"
                    style={{ "resize": "none", "white-space": "pre-wrap" }}
                ></textarea>
            </div>
            <div className="submit-button">
                <button type="submit">Save</button>
            </div>
        </form>
    )
}

export default FragmentForm;