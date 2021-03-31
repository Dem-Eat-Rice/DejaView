import React from "react";
import magnifyingGlass from "./icon4.png";
import "./SearchBar.css";

function SearchBar() {

    const preventSearchRefreshOnClick = async (e) => {
        e.preventDefault();
    } 

    return (
        <div class="searchBar">
            <form>
                <input className="search" type="text" placeholder="Search Dreams" />
                <input type="image" alt="submit" onClick={preventSearchRefreshOnClick} id="glass" src={magnifyingGlass} />
            </form>
        </div>
    )
}

export default SearchBar;