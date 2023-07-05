import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormData } from "@/context/FormData/FormDataContext";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import styles from "../../styles/SignupOne.module.css";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import Button from "@/components/common/Button";
import Email_Icon from "../../../public/assets/register/email.svg";
import Hospital_icon from "../../../public/assets/register/hospital.svg";
import Moon_icon from "../../../public/assets/register/iconamoon.svg";
import Password_icon from "../../../public/assets/register/password.svg";
import Hexagon from "../../../public/assets/register/hexagon.svg";

export default function Signup_one() {
  const { formData, updateFormData } = useFormData();
  const [formFields, setFormFields] = useState({
    email: "",
    healthcareName: "",
    healthcareType: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(formFields);
  }, [formFields]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSelectChange = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      healthcareType: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formFields.password !== formFields.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    updateFormData(formFields);
    router.push("/health_center/welcome");

    // Clear form fields after successful submission
    setFormFields({
      email: "",
      healthcareName: "",
      healthcareType: "",
      password: "",
      confirmPassword: "",
    });

    console.log("Form fields have been cleared");
  };

  // form validation
  const allFieldsFilled =
    formFields.email &&
    formFields.healthcareName &&
    formFields.healthcareType &&
    formFields.password &&
    formFields.confirmPassword;

  const optionList = [
    { value: "1", label: "Healthcare type" },
    { value: "2", label: "Hospital" },
    { value: "3", label: "Pharmacy" },
    { value: "4", label: "Maternity" },
    { value: "5", label: "Clinic" },
  ];

  return (
    <section className={styles.container}>
      <section className={styles.left}>
        <Image src={Hexagon} alt="hexagon" />
      </section>

      <section className={styles.sub_container}>
        <div className={styles.hero}>
          <p>Already have an account?</p>
          <Link href="/health_center/admin_signin">
            <p>Sign in</p>
          </Link>
        </div>

        <div className={styles.form_cont}>
          <div className={styles.heading}>
            <h1>Sign up</h1>
            <h3>Register as Health centre</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.input_cont}>
              <Image src={Email_Icon} alt="email icon" />
              <Input
                type="email"
                name="email"
                value={formFields.email}
                onChange={handleOnChange}
                placeholder="Email"
              />
            </div>

            <div className={styles.input_cont}>
              <Image src={Hospital_icon} alt="hospital icon" />
              <Input
                type="text"
                name="healthcareName"
                value={formFields.healthcareName}
                onChange={handleOnChange}
                placeholder="Healthcare name"
              />
            </div>

            <div className={styles.input_cont}>
              <Image src={Moon_icon} alt="hospital icon" />
              <Select
                options={optionList}
                name="healthcareType"
                value={formFields.healthcareType}
                onChange={handleSelectChange}
              />
            </div>

            <div className={styles.input_cont}>
              <Image src={Password_icon} alt="hospital icon" />
              <Input
                type="password"
                name="password"
                value={formFields.password}
                onChange={handleOnChange}
                placeholder="Password"
              />
            </div>

            <div className={styles.input_cont}>
              <Image src={Password_icon} alt="hospital icon" />
              <Input
                type="password"
                name="confirmPassword"
                value={formFields.confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm Password"
              />
            </div>

            <div
              className={
                !allFieldsFilled ? styles.disabled : styles.button_cont
              }
            >
              <Button
                type="submit"
                disabled={!allFieldsFilled}
                //   onClick={someFunction}
                text="Create Account"
                //   className="custom-class"
              />
            </div>
          </form>

          <div className={styles.agreement}>
            <input type="checkbox" />
            <p>
              I agree to the <span>Terms of use</span> and{" "}
              <span>Privacy policy</span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
