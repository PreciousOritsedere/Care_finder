import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import { firestore as db } from "../firebase";
import { query, collection, where, getDocs } from "firebase/firestore";
import SearchIcon from "../../public/assets/search/search_icon.svg";
import styles from "../styles/SearchBar.module.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { SearchResultsContext } from "@/context/SearchResults/SearchResultsContext";

function SearchBar() {
  const [location, setLocation] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const { searchResults, setSearchResults } = useContext(SearchResultsContext);
  const router = useRouter();

  // fetch values from localStorage on component mount
  useEffect(() => {
    const storedCountry = window.localStorage.getItem("selectedCountry");
    const storedState = window.localStorage.getItem("selectedState");

    if (storedCountry) setSelectedCountry(storedCountry);
    if (storedState) setSelectedState(storedState);
  }, []);

  // store values in localStorage on country or state change
  useEffect(() => {
    window.localStorage.setItem("selectedCountry", selectedCountry);
    window.localStorage.setItem("selectedState", selectedState);
  }, [selectedCountry, selectedState]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    // setFormState((prevState) => ({
    //   ...prevState,
    //   country: country,
    // }));
  };

  console.log(selectedCountry);

  const handleStateChange = (state) => {
    setSelectedState(state);
    // setFormState((prevState) => ({
    //   ...prevState,
    //   state: state,
    // }));
  };

  console.log(selectedState);

  const handleSearch = async (event) => {
    event.preventDefault();

    console.log("Entered country:", selectedCountry);
    console.log("Entered state:", selectedState);

    // Create a query against the collection
    const q = query(
      collection(db, "hospitals"),
      where("country", "==", selectedCountry),
      where("state", "==", selectedState)
    );

    const querySnapshot = await getDocs(q);

    const hospitals = [];
    querySnapshot.forEach((doc) => {
      hospitals.push({ id: doc.id, ...doc.data() });
    });

    if (hospitals.length === 0) {
      console.log("No result found");
    } else {
      console.log("Hospitals:", hospitals);
    }

    setSearchResults({ selectedCountry, selectedState, hospitals });
    // push country and state as parameters in URL
    router.push(`/results/${selectedCountry}/${selectedState}`);
    // router.push("/results");
  };

  return (
    <div className={styles.cont}>
      <form className={styles.form} onSubmit={handleSearch}>
        <div className={styles.search_input}>
          <label htmlFor="search">My location:</label>
          <input
            type="text"
            name="location"
            placeholder="My Current location or search location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className={styles.search_sec_sect}>
          <div className={styles.search_select}>
            <label htmlFor="search">Country</label>
            <CountryDropdown
              id="country"
              value={selectedCountry}
              onChange={handleCountryChange}
              className={styles.select}
            />
          </div>
          <div className={styles.search_select}>
            <label htmlFor="search">state</label>
            <RegionDropdown
              id="state"
              country={selectedCountry}
              value={selectedState}
              onChange={handleStateChange}
              className={styles.select}
            />
          </div>

          <button>
            <Image src={SearchIcon} alt="search icon" />
          </button>
        </div>
      </form>

      <div className={styles.search_suggestions}>
        <p>You may be looking for</p>
        <div className={styles.search_suggestions_sub}>
          <div className={styles.suggestions}>
            <p>Doctors</p>
            <p>x</p>
          </div>
          <div className={styles.suggestions}>
            <p>Specialist</p>
            <p>x</p>
          </div>
          <div className={styles.suggestions}>
            <p>Consultation</p>
            <p>x</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
