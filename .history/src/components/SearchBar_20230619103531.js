import React from "react";

function SearchBar() {
  return (
    <div>
      SearchBar
      <form>
        <div>
          <label htmlFor="search">My location:</label>
          <input
            type="text"
            name="location"
            placeholder="My Current location or search location"
          />
        </div>
        <div>
          <label htmlFor="search">Search:</label>
          
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
