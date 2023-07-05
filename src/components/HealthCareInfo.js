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

const initialFormState = {
  healthcareName: "",
  healthcareType: "",
  aboutHealthcare: "",
  regNo: "",
  country: "",
  state: "",
  postalCode: "",
  healthcareAddress: "",
  healthcareEmail: "",
};

// Initial error state
const initialErrorState = {
  healthcareName: "",
  healthcareType: "",
  aboutHealthcare: "",
  regNo: "",
  country: "",
  state: "",
  postalCode: "",
  healthcareAddress: "",
  healthcareEmail: "",
};

export default function HealthCareInfo() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);
  const [isFormValid, setIsFormValid] = useState(false);
  const [key, setKey] = useState(Math.random().toString());

  // Define a function to validate the form
  const validateForm = () => {
    let isValid = true;
    let errors = { ...initialErrorState };
    for (let field in formState) {
      if (!formState[field]) {
        isValid = false;
        errors[field] = "This field is required";
      }
    }
    setFormErrors(errors);
    setIsFormValid(isValid);
  };

  // Run validation whenever formState changes
  useEffect(() => {
    validateForm();
  }, [formState]);

  // Define a function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedState("");
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
  };

  const handleSelectChange = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      healthcareType: e.target.value,
    }));
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
        <Input
          type="text"
          placeholder="Healthcare name"
          name="healthcareName"
          value={formState.healthcareName}
          onChange={handleInputChange}
        />

        <Select
          options={optionList}
          name="healthcareType"
          value={formState.healthcareType}
          onChange={handleSelectChange}
        />

        <div className={styles.textare_cont}>
          <Textarea
            type="text"
            placeholder="About Healthcare"
            name="aboutHealthcare"
            value={formState.aboutHealthcare}
            onChange={handleInputChange}
          />
          <span>0/260 Character</span>
        </div>

        <div className={styles.small_inputs}>
          <Input
            type="number"
            placeholder="Reg No.:"
            name="regNo"
            value={formState.regNo}
            onChange={handleInputChange}
          />
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
          <Input
            type="number"
            placeholder="Postal Code"
            name="postalCode"
            value={formState.postalCode}
            onChange={handleInputChange}
          />
        </div>

        <Input
          type="text"
          placeholder="Hospital Address"
          name="healthcareAddress"
          value={formState.healthcareAddress}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          placeholder="Andersonmathew@gmail.com"
          name="healthcareEmail"
          value={formState.healthcareEmail}
          onChange={handleInputChange}
        />

        <div className={styles.file_input_cont}>
          <div className={styles.file_input_label}>
            <p>Documents</p>
            <div
              className={styles.add_label}
              onClick={() => setKey(Math.random().toString())}
            >
              <Image src={Add} alt="add icon" />
              <p>Add new doc</p>
            </div>
          </div>
          <div className={styles.file_input} key={key}>
            <div className={styles.file_upload}>
              <Input type="file" />
            </div>
            <button className={styles.file_btn}>Select File</button>
          </div>
        </div>
        <div className={styles.link_wrapper}>
          <Link
            href="/health_center/signup_three"
            className={styles.button_cont}
          >
            <Button
              //   onClick={someFunction}
              text="Continue"
              disabled={!isFormValid}
              //   className="custom-class"
            />
            <Image src={Right_Arrow} alt="right arrow" />
          </Link>
        </div>
      </form>
    </section>
  );
}
