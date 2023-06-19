import React from "react";
import Image from "next/image";
import DownArrow from "../assets/search/down arrow.svg";

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
            >
              <option>select an option</option>
              <option>Maternity</option>
              <option>Pediocrativ</option>
            </select>
          </div>
          <Image src={DownArrow} alt="down arrow" />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
