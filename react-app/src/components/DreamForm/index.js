import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


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

    const [title, setTitle] = useState();
    const [keywords, setKeywords] = useState();
    const [notes, setNotes] = useState();

    const onSubmit = async(e) => {
        e.preventDefault();
        await createDream(title, keywords, notes, dreamer_id)

    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="title">
                    <input
                        type="text"
                        name="title"

                    ></input>
                </div>
                <div className="keywords">
                </div>
                <div className="notes">
                </div>
                <div className="">
                </div>
                <div className="">
                </div>
            </form>
        </>
    )
}