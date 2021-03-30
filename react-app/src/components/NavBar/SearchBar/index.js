import React from "react";
import { NavLink } from "react-router-dom";
import magnifyingGlass from "./my.png"

function SearchBar() {

    return (
        <div class="searchBar">
            <input className="search" type="text" placeholder="Search movies" />
            <NavLink to="/search">
                <img id="glass" alt='' src={magnifyingGlass} />
            </NavLink>
        </div>
    )
}

export default SearchBar;