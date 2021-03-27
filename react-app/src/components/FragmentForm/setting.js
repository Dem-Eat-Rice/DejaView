import React from "react";

function Setting() {
    return (
        <div className="setting">
            <label>Keywords</label>
            <br />
            <input
                type="text"
                name="setting"
                value={setting}
                onChange={e => setSetting(e.target.value)}
            ></input>
        </div>
    )
}