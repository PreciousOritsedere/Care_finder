import React from "react";

function SearchBar() {
  return (
    <div>
      SearchBar
      <div>
        <label htmlFor="search">My location:</label>
        <input
          type="text"
          name="location"
          placeholder="My Current location or search location"
        />
      </div>
      <div></div>
    </div>
  );
}

export default SearchBar;
