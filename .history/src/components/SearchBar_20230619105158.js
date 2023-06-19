import React from "react";
import Image from "next/image";
import Search

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
            <select type="text" name="centre">
              <option>select an option</option>
              <option>Maternity</option>
              <option>Pediocrative</option>
            </select>
          </div>

          <div>
            <label htmlFor="search">Country</label>
            <select type="text" name="country">
              <option>select an option</option>
            </select>
          </div>

          <button>

          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
