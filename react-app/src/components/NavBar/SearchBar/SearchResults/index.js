import React from "react";
import { Link } from "react-router-dom";


function SearchResults({ dream, user, setHiddenValue, setSearchValue }) {

    return (
        <div 
        value={dream.id}
        id={dream.id}
        className="searched-dream"
        onClick={() => {
            setSearchValue(dream.title);
            setHiddenValue(dream.id)
        }}
        ><Link to={`/users/${user.id}/dreams/${dream.id}`}>{dream.title}</Link>
        </div>
    )
}

export default SearchResults;