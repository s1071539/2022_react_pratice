import React from "react";

const Search = ({ goSearch }) => {
  return (
    <div className="mySearch">
      <input type="text" />
      <button onClick={goSearch}>Search</button>
    </div>
  );
};

export default Search;
