import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/SignupOne.module.css";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import Button from "@/components/common/Button";
import Email_Icon from "../../../public/assets/register/email.svg";
import Hospital_icon from "../../../public/assets/register/hospital.svg";
import Moon_icon from "../../../public/assets/register/iconamoon.svg";
import Password_icon from "../../../public/assets/register/password.svg";
import Hexagon from "../../../public/assets/register/hexagon.svg";

export default function admin_signup_one() {
  const optionList = [
    { value: "1", label: "Healthcare type" },
    { value: "2", label: "Hospital" },
    { value: "2", label: "Pharmacy" },
    { value: "2", label: "Maternity" },
    { value: "2", label: "Clinic" },
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

          <form>
            <div className={styles.input_cont}>
              <Image src={Email_Icon} alt="email icon" />
              <Input
                type="email"
                // value={someValue}
                // onChange={someFunction}
                placeholder="Email"
              />
            </div>

            <div className={styles.input_cont}>
              <Image src={Hospital_icon} alt="hospital icon" />
              <Input
                type="text"
                // value={someValue}
                // onChange={someFunction}
                placeholder="Healthcare name"
              />
            </div>

            <div className={styles.input_cont}>
              <Image src={Moon_icon} alt="hospital icon" />
              <Select
                options={optionList}
                // value={selectedValue}
                // onChange={someFunction}
              />
            </div>

            <div className={styles.input_cont}>
              <Image src={Password_icon} alt="hospital icon" />
              <Input
                type="password"
                // value={someValue}
                // onChange={someFunction}
                placeholder="Password"
              />
            </div>

            <div className={styles.input_cont}>
              <Image src={Password_icon} alt="hospital icon" />
              <Input
                type="password"
                // value={someValue}
                // onChange={someFunction}
                placeholder="Confirm Password"
              />
            </div>

            <Button
              //   onClick={someFunction}
              text="Create Account"
              //   className="custom-class"
            />
          </form>

          <div className={styles.agreement}>
            <Input type="checkbox" />
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
