import { React, useState } from "react";

const Search = ({ fetchPhoto }) => {
  const [searchInput, setSearchInput] = useState("");

  let searchURL = (query) => {
    return `https://api.pexels.com/v1/search?query=${query}&per_page=10`;
  };

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="mySearch">
      <input type="text" value={searchInput} onChange={searchInputHandler} />
      <button
        onClick={() => {
          fetchPhoto(searchURL(searchInput));
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
