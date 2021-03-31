import React from "react";
import { NavLink } from "react-router-dom";
import magnifyingGlass from "./icon4.png"

function SearchBar() {

    return (
        <div class="searchBar">
            <form>
                <input className="search" type="text" placeholder="Search Dreams" />
                <input type="image" alt="submit" id="glass" src={magnifyingGlass} />
            </form>
        </div>
    )
}

export default SearchBar;