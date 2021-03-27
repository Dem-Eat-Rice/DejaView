import React from "react";

function Description({ description, setDescription }) {
    return (
        <div className="description">
            <label>Notes...</label>
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
    )
}

export default Description;