import React, { useEffect, useState } from "react";
import magnifyingGlass from "./icon4.png";
import { fetchUserDreams } from "../../../store/users";
import "./SearchBar.css";
import { useHistory } from "react-router";

function SearchBar({ user }) {

    const [searchInput, setSearchInput] = useState([]);
    const history = useHistory();

    const preventSearchRefreshOnClick = async (e) => {
        e.preventDefault();
        // loadDreams(searchInput);
        // history.push(`/users/${user.id}/dreams/9`)
    }

    const loadDreams = async (input) => {
        const response = await fetch(`/api/users/${user.id}/dreams`)
        const dreamsArray = await response.json();
        if (dreamsArray) {
            const newDream = dreamsArray.filter(dream => {
                return (
                    dream.title.includes(input) ||
                    dream.notes.includes(input) ||
                    dream.keywords.includes(input)
                )
            })
            return await newDream
        }
        return null;
    }

    
    return (
        <div class="searchBar">
            <form>
                <input
                    className="search"
                    id="search-input"
                    type="text"
                    placeholder="Search Dreams..."
                    onChange={async (e) => {
                        setSearchInput(e.target.value);
                        const searchDropBox = loadDreams(e.target.value);
                        const thisInput = document.getElementById("search-input");
                        console.log(thisInput, await searchDropBox)
                        // if (!Array.isArray(searchDropBox)) {
                        //     for (const dreams of searchDropBox) {
                        //         return thisInput.append(dreams.title)        
                        //     }
                        // }
                    }
                }
                />

                <input type="image" alt="submit" onClick={preventSearchRefreshOnClick} id="glass" src={magnifyingGlass} />
            </form>
        </div>
    )
}

export default SearchBar;