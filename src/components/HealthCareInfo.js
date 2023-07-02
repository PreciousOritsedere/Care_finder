import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import styles from "../styles/healthCareInfo.module.css";
import Input from "./common/Input";
import Select from "./common/Select";
import Textarea from "./common/Textarea";
import Button from "./common/Button";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Add from "../../public/assets/register/plus.svg";
import Right_Arrow from "../../public/assets/register/right arrow.svg";

export default function HealthCareInfo() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedState("");
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
  };

  const optionList = [
    { value: "1", label: "Healthcare type" },
    { value: "2", label: "Hospital" },
    { value: "2", label: "Pharmacy" },
    { value: "2", label: "Maternity" },
    { value: "2", label: "Clinic" },
  ];

  // const countryOptions = [
  //   { value: "", label: "Country:", disabled: true },
  //   ...Object.keys(countries).map((countryCode) => ({
  //     value: countryCode,
  //     label: countries[countryCode].name,
  //   })),
  // ];

  return (
    <section className={styles.container}>
      <h1>Healthcare Info</h1>

      <form className={styles.form}>
        <Input type="text" placeholder="Healthcare name" />

        <Select
          options={optionList}
          // value={selectedValue}
          // onChange={someFunction}
        />

        <div className={styles.textare_cont}>
          <Textarea type="text" placeholder="About Healthcare" />
          <span>0/260 Character</span>
        </div>

        <div className={styles.small_inputs}>
          <Input type="number" placeholder="Reg No.:" />
          <CountryDropdown
            id="country"
            value={selectedCountry}
            onChange={handleCountryChange}
            className={styles.select}
          />
          <RegionDropdown
          id="state"
          country={selectedCountry}
          value={selectedState}
          onChange={handleStateChange}
          className={styles.select}
        />
          <Input type="number" placeholder="Postal Code" />
        </div>

        <Input type="text" placeholder="Hospital Address" />
        <Input type="text" placeholder="Andersonmathew@gmail.com" />

        <div className={styles.file_input_cont}>
          <div className={styles.file_input_label}>
            <p>Documents</p>
            <div className={styles.add_label}>
              <Image src={Add} alt="add icon" />
              <p>Add new doc</p>
            </div>
          </div>
          <div className={styles.file_input}>
            <div className={styles.file_upload}>
              <Input type="file" />
            </div>
            <button className={styles.file_btn}>Select File</button>
          </div>
        </div>
        <div className={styles.link_wrapper}>
          <Link href="/health_center/signup_three" className={styles.button_cont}>
            <Button
              //   onClick={someFunction}
              text="Continue"
              //   className="custom-class"
            />
            <Image src={Right_Arrow} alt="right arrow" />
          </Link>
        </div>
      </form>
    </section>
  );
}
