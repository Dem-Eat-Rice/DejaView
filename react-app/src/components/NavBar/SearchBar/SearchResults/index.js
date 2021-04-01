import React from "react";

function SearchResults({ dream }) {
    
    return (
        <div className="searched-dream">{dream.title}</div>
    )
}

export default SearchResults;