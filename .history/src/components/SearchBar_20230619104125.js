import React from "react";
import 

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
          <div>
            <label htmlFor="search">Health Centre:</label>
            <select
              type="text"
              name="centre"
              placeholder="Maternity, Pediocrativ etc"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
