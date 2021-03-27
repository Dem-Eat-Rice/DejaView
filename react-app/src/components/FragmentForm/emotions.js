import React from "react";

function Emotions() {
    return (
        <div className="emotions">
            <label>Keywords</label>
            <br />
            <input
                type="text"
                name="emotions"
                value={emotions}
                onChange={e => setEmotions(e.target.value)}
            ></input>
        </div>
    )
}