import React, { useEffect, useState } from "react";
import magnifyingGlass from "./icon4.png";
import SearchResults from "./SearchResults";
import "./SearchBar.css";

function SearchBar({ user }) {

    const [searchInput, setSearchInput] = useState([]);
    const [searchBarPlaceholder, setSearchBarPlaceholder] = useState("Search Dreams by Title or Keywords...");

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
                    onBlur={() => setSearchBarPlaceholder("Search Dreams by Title or Keywords...")}
                    onFocus={() => setSearchBarPlaceholder()}
                    onChange={async (e) => {
                        const searchDropBox = loadDreams(e.target.value);
                        setSearchInput(await searchDropBox);
                    }}
                />
                <input type="image" alt="submit" onClick={preventSearchRefreshOnClick} id="glass" src={magnifyingGlass} />
                    {Array.isArray(searchInput) ?
                        searchInput.map(dream => {
                            return (
                                <>
                                    <SearchResults key={dream.id} dream={dream} />
                                </>
                            )
                        })
                        : null}
            </form>
        </div>
    )
}

export default SearchBar;