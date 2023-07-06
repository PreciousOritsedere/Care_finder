import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useFormData } from "../context/FormData/FormDataContext";
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
  const [fileInputs, setFileInputs] = useState([
    { key: Math.random().toString(), file: null, name: "" },
  ]);

  const [fileName, setFileName] = useState("");

  const { updateFormData } = useFormData();

  const inputFileRefs = useRef([]);

  const router = useRouter();


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
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formState);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setFormState((prevState) => ({
      ...prevState,
      country: country,
    }));
  };

  console.log(selectedCountry);

  const handleStateChange = (state) => {
    setSelectedState(state);
    setFormState((prevState) => ({
      ...prevState,
      state: state,
    }));
  };

  console.log(selectedState);

  const handleSelectChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      healthcareType: e.target.value,
    }));
  };
  console.log(formState);

  // Function to add a new file input
  const addFileInput = () => {
    setFileInputs((prevState) => [
      ...prevState,
      { key: Math.random().toString(), file: null, name: "" },
    ]);
  };

  // Function to handle file input changes
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    // setFileName(file.name);
    setFileInputs((prevState) => {
      const newFileInputs = [...prevState];
      newFileInputs[index].file = file;
      newFileInputs[index].name = file.name;
      return newFileInputs;
    });
  };

  const handleSelectFileBtn = (index) => {
    if (inputFileRefs.current[index]) {
      inputFileRefs.current[index].click();
    } else {
      console.error(`No ref found at index ${index}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isFormValid) {
        const completeFormData = {
          ...formState,
          files: fileInputs,
        };

        await updateFormData(completeFormData);

        setFormState(initialFormState);
        setSelectedCountry("");
        setSelectedState("");
        setFileInputs([
          { key: Math.random().toString(), file: null, name: "" },
        ]);

        router.push({
          pathname: "/health_center/signup_two",
          query: { tab: "imageinfo" },
        });
      }
    } catch (err) {
      console.error(err);
    }
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
          onChange={handleOnChange}
        />

        <Select
          options={optionList}
          name="healthcareType"
          value={formState.healthcareType}
          onChange={handleSelectChange}
        />

        <div className={styles.textare_cont}>
          <Textarea
            placeholder="About Healthcare"
            name="aboutHealthcare"
            value={formState.aboutHealthcare}
            onChange={handleOnChange}
          />
          <span>0/260 Character</span>
        </div>

        <div className={styles.small_inputs}>
          <Input
            type="number"
            placeholder="Reg No.:"
            name="regNo"
            value={formState.regNo}
            onChange={handleOnChange}
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
            onChange={handleOnChange}
          />
        </div>

        <Input
          type="text"
          placeholder="Hospital Address"
          name="healthcareAddress"
          value={formState.healthcareAddress}
          onChange={handleOnChange}
        />
        <Input
          type="text"
          placeholder="Andersonmathew@gmail.com"
          name="healthcareEmail"
          value={formState.healthcareEmail}
          onChange={handleOnChange}
        />

        <div className={styles.file_input_cont}>
          <div className={styles.file_input_label}>
            <p>Documents</p>
            <div className={styles.add_label} onClick={addFileInput}>
              <Image src={Add} alt="add icon" />
              <p>Add new doc</p>
            </div>
          </div>
          {fileInputs.map((input, index) => (
            <div className={styles.file_input} key={input.key}>
              <div className={styles.file_upload}>
                {" "}
                <p>{input.name && `Successfully uploaded ${input.name}`}</p>
              </div>

              <div className={styles.file_btn}>
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={(el) => (inputFileRefs.current[index] = el)}
                  onChange={(e) => handleFileChange(e, index)}
                />
                <button
                  type="button"
                  onClick={() => handleSelectFileBtn(index)}
                >
                  Select File
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.link_wrapper}>
          <div className={styles.button_cont}>
            <Button
              onClick={handleSubmit}
              text="Continue"
              disabled={!isFormValid}
              //   className="custom-class"
            />
            <Image src={Right_Arrow} alt="right arrow" />
          </div>
        </div>
      </form>
    </section>
  );
}
