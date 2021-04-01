import React from "react";

function SearchResults({ dream, setSearchResults }) {
    
    return (
        <div 
        className="searched-dream"
        onClick={() => {
            setSearchResults(dream.title)
        }}
        >{dream.title}</div>
    )
}

export default SearchResults;