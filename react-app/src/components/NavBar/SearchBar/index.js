import React from "react";
import { NavLink } from "react-router-dom";
import magnifyingGlass from "./icon4.png"

function SearchBar() {

    return (
        <div class="searchBar">
            <input className="search" type="text" placeholder="Search Dreams    " />
            <NavLink to="/search">
                <img id="glass" alt='' src={magnifyingGlass} />
            </NavLink>
        </div>
    )
}

export default SearchBar;