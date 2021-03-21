import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function DreamCard({ user, dream }) {


    return (
        <div className="dream-card">
            <div className="dream-title">
                <h2>{dream.title}</h2>
                <input
                    id={`${dream.id}`}
                    placeholder={dream.title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
            </div>
            <div className="dream-keywords">
                <h4>Keywords: </h4>
                <p style={{ "whiteSpace": "pre-wrap" }}>
                    {dream.keywords}
                </p>
            </div>
            <div className="dream-notes">
                <h4>Notes: </h4>
                <p style={{ "whiteSpace": "pre-wrap" }}>
                    {dream.notes}
                </p>
            </div>
        </div>
    )
}