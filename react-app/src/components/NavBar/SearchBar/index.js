import React, { useEffect, useState } from "react";
import magnifyingGlass from "./icon4.png";
import SearchResults from "./SearchResults";
import "./SearchBar.css";

function SearchBar({ user }) {

    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState()
    const [showResults, setShowResults] = useState(false);
    const [searchBarPlaceholder, setSearchBarPlaceholder] = useState("Search Dreams by Title or Keywords...");

    useEffect(() => {

    }, [searchBarPlaceholder, showResults])

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
                    <input type="image" alt="submit" onClick={(e) => e.preventDefault()} id="glass" src={magnifyingGlass} />

                    <div className="search-results_container">
                        {Array.isArray(searchResults) ?
                            searchResults.map(dream => {
                                return (
                                    <SearchResults 
                                    key={dream.id} 
                                    dream={dream}
                                    user={user}
                                    setShowResults={setShowResults}
                                    setSearchValue={setSearchValue}
                                    />
                                )
                            })
                            : null}
                    </div>
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
                        value={searchValue}
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
                    <input type="image" alt="submit" onClick={(e) => e.preventDefault()} id="glass" src={magnifyingGlass} />

                </form>
            </div>
        )
    }
}

export default SearchBar;