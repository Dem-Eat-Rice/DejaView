import React, { useEffect, useState } from "react";
import magnifyingGlass from "./icon4.png";
import { fetchUserDreams } from "../../../store/users";
import "./SearchBar.css";
import { useHistory } from "react-router";

function SearchBar({ user }) {

    const [searchInput, setSearchInput] = useState([]);
    const [searchBarPlaceholder, setSearchBarPlaceholder] = useState();
    const history = useHistory();

    useEffect(() => {
        
    }, [searchBarPlaceholder])

    const preventSearchRefreshOnClick = async (e) => {
        e.preventDefault();
        // loadDreams(searchInput);
        // history.push(`/users/${user.id}/dreams/9`)
    }

    const loadDreams = async (input) => {
        const response = await fetch(`/api/users/${user.id}/dreams`)
        const dreamsArray = await response.json();
        if (dreamsArray) {
            const newDreamPromise = dreamsArray.filter(dream => {
                return (
                    dream.title.includes(input) ||
                    dream.keywords.includes(input)
                )
            })
            return await newDreamPromise
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
                    placeholder={searchBarPlaceholder}
                    // onBlur={setSearchBarPlaceholder()}
                    // onFocus={setSearchBarPlaceholder()}
                    onChange={async (e) => {
                        const searchDropBox = loadDreams(e.target.value);
                        setSearchInput(await searchDropBox);
                    }}
                />
                <input type="image" alt="submit" onClick={preventSearchRefreshOnClick} id="glass" src={magnifyingGlass} />
                {Array.isArray(searchInput) ? 
                searchInput.map(dream => {
                    return (
                        <div key={dream.id}className="searched-dream">{dream.title}</div>
                    )
                })
                : null}
            </form>
        </div>
    )
}

export default SearchBar;