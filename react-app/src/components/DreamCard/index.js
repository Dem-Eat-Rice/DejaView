import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function DreamCard() {

    
    return (
        <div className="dream-card">
            <div className="dream-title">
                <h2>Title</h2>
                <input 
                  id={`${dream.id}`}
                  placeholder={dream.title}
                  onChange={(e) => setTitle(e.target.value)}
                  ></input>
            </div>
            <div className="dream-keywords">
            </div>
            <div className="dream-notes">
            </div>
        </div>
    )
}