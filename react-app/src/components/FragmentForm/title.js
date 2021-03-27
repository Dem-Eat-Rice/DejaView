import React from "react";

function Title() {
    return (
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
    )
}

export default Title;
