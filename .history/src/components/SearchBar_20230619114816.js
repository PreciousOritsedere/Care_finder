import React from "react";
import Image from "next/image";
import SearchIcon from "../assets/search/search_icon.svg";
import styles from "../styles/SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.cont}>
      <form className={styles.form}>
        <div className={styles.search_input}>
          <label htmlFor="search">My location:</label>
          <input
            type="text"
            name="location"
            placeholder="My Current location or search location"
          />
        </div>

        <div className={styles.search_sec_sect}>
          <div className={styles.search_select}>
            <label htmlFor="search">Health Centre:</label>
            <select type="text" name="centre">
              <option>select an option</option>
              <option>Maternity</option>
              <option>Pediocrative</option>
            </select>
          </div>

          <div className={styles.search_select}>
            <label htmlFor="search">Country</label>
            <select type="text" name="country">
              <option>select an option</option>
            </select>
          </div>

          <button>
            <Image src={SearchIcon} alt="search icon" />
          </button>
        </div>
      </form>

      <div className={styles.search_suggestions}>
        <p>You may be looking for</p>
        <div className={styles.search_suggestions_sub}>
          <div className={styles.search_suggestions}>
            <p>Doctors</p>
            <p>x</p>
          </div>
          <div>
            <p>Specialist</p>
            <p>x</p>
          </div>
          <div>
            <p>Consultation</p>
            <p>x</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
