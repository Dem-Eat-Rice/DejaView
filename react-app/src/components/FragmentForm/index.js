import React, { useState } from "react";
import { getDreamFragments } from "../../store/dreams";
import { useDispatch } from "react-redux";


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

function FragmentForm ({ user, dreamId }) {

    const [title, setTitle] = useState("");
    const [emotions, setEmotions] = useState("");
    const [setting, setSetting] = useState("");
    const [description, setDescription] = useState("");
    const user_id = user.id;

    const dispatch = useDispatch();

    const onSubmit = async(e) => {
        e.preventDefault();
        await createFragment(title, emotions, setting, description, user_id)
        setTitle("");
        setEmotions("");
        setSetting("");
        setDescription("");
        dispatch(getDreamFragments(dreamId))

    }

    return (
        <form onSubmit={onSubmit}>
            <div className="title">
                <label>Title</label>
                <br />
            </div>
            <div className="emotions">
                <label>Keywords</label>
                <br />
            </div>
            <div className="setting">
                <label>Keywords</label>
                <br />
            </div>
            <div className="description">
                <label>Notes...</label>
                <br />
            </div>
            <div className="submit-button">
                <button type="submit">Save</button>
            </div>
        </form>
    )
}

export default FragmentForm;