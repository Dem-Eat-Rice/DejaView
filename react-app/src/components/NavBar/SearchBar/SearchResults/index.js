import React from "react";
import { Link } from "react-router-dom";

function SearchResults({ dream, user, setShowResults, setSearchValue }) {
    
    return (
        <div 
        className="searched-dream"
        onClick={() => {
            setShowResults(false)
            setSearchValue("")
        }}
        ><Link to={`/users/${user.id}/dreams/${dream.id}`}>{dream.title}</Link></div>
    )
}

export default SearchResults;