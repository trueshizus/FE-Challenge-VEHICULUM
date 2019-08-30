import React, { useState } from "react";
import useFirebaseCollection from "../../firebase/useFirebaseCollection";
import useFirebaseDocument from "../../firebase/useFirebaseDocument";
import { Link } from "@reach/router";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [jokesList] = useFirebaseCollection("jokes", 20);

  const onSearch = value => {
    setSearchValue(value);
    if (value) {
      setSearchResults(
        jokesList
          .filter(joke =>
            joke.value.toLowerCase().includes(value.toLowerCase())
          )
          .slice(0, 5)
      );
    } else {
      setSearchResults([]);
    }
  };
  return (
    <div class="search">
      <input
        class="input input--search typography typography--search"
        type="text"
        placeholder="How can we make you laugh today?"
        value={searchValue}
        onChange={e => onSearch(e.target.value)}
      />
      {searchResults.length > 0 &&
        <div class="search--results">
          {searchResults.map(joke =>
            <SearchResult
              key={joke.id}
              joke={joke}
              onClick={() => onSearch("")}
            />
          )}
        </div>}
    </div>
  );
}

function SearchResult({ joke, onClick }) {
  const { id, value, categories } = joke;

  const [category, isLoading] = useFirebaseDocument(
    "categories",
    categories.id
  );

  const label = Object.keys(category).length ? category.label : "No category";

  if (isLoading) {
    return (
      <div class="search--results--result typography typography--search--result">
        ...loading
      </div>
    );
  }
  return (
    <Link
      to={`jokes/${id}`}
      class="search--results--result typography typography--search--result bolt-icon"
      onClick={onClick}
    >
      {`${label}: ${value.split(" ").slice(0, 2).join(" ")}`}
    </Link>
  );
}

export default Search;
