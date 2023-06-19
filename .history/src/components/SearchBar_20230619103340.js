import React from 'react'

function SearchBar() {
  return (
    <div>SearchBar
    <div>
      <label htmlFor="search">Search</label>
      <input type="text" name="search" id="search" placeholder='My Current location or search location' />
    </div>
    </div>
  )
}

export default SearchBar