import React, { useEffect, useState } from "react";
import magnifyingGlass from "./icon4.png";
import SearchResults from "./SearchResults";
import "./SearchBar.css";

function SearchBar({ user }) {

    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [searchBarPlaceholder, setSearchBarPlaceholder] = useState("Search Dreams by Title or Keywords...");

    useEffect(() => {

    }, [searchBarPlaceholder, showResults])

    const preventSearchRefreshOnClick = async (e) => {
        e.preventDefault();
        // loadDreams(searchResults);
        // history.push(`/users/${user.id}/dreams/9`)
    }

    const loadDreams = async (input) => {
        const response = await fetch(`/api/users/${user.id}/dreams`)
        const dreamsArray = await response.json();
        if (dreamsArray) {
            const newDreamPromise = dreamsArray.filter(dream => {
                return (
                    dream.title.toLowerCase().includes(input.toLowerCase()) ||
                    dream.keywords.toLowerCase().includes(input.toLowerCase())
                )
            })
            return await newDreamPromise
        }
        return null;
    }

    if (showResults) {
        return (
            <div class="searchBar">
                <form>
                    <input
                        className="search"
                        id="search-input"
                        type="text"
                        placeholder={() => searchBarPlaceholder}
                        onBlur={() => {
                            setSearchBarPlaceholder("Search Dreams by Title or Keywords...");
                            setShowResults(false)
                        }}
                        onFocus={() => {
                            setSearchBarPlaceholder("")
                            setShowResults(true)
                        }}
                        onChange={async (e) => {
                            const searchDropBox = loadDreams(e.target.value);
                            setSearchResults(await searchDropBox);
                            setShowResults(true);
                        }}
                    />
                    <input type="image" alt="submit" onClick={preventSearchRefreshOnClick} id="glass" src={magnifyingGlass} />


                    {Array.isArray(searchResults) ?
                        searchResults.map(dream => {
                            return (
                                <SearchResults setSearchResults={setSearchResults} key={dream.id} dream={dream} />
                            )
                        })
                        : null}
                </form>
            </div>
        )
    } else {
        return (
            <div class="searchBar">
                <form>
                    <input
                        className="search"
                        id="search-input"
                        type="text"
                        placeholder={searchBarPlaceholder}
                        onBlur={() => {
                            setSearchBarPlaceholder("Search Dreams by Title or Keywords...");
                            setShowResults(false)
                        }}
                        onFocus={() => setSearchBarPlaceholder()}
                        onChange={async (e) => {
                            const searchDropBox = loadDreams(e.target.value);
                            setSearchResults(await searchDropBox);
                            setShowResults(true);
                        }}
                    />
                    <input type="image" alt="submit" onClick={preventSearchRefreshOnClick} id="glass" src={magnifyingGlass} />

                </form>
            </div>
        )
    }
}

export default SearchBar;