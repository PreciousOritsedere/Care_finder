import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/SignupThree.module.css";
import Doctor from "../../../public/assets/register/doctor.svg";
import Done from "../../../public/assets/register/done.svg";
import Button from "../../components/common/Button";

export default function signup_three() {
  return (
    <div className={styles.container}>
      <aside className={styles.left}>
        <Image src={Doctor} alt="doctor" />
      </aside>

      <section className={styles.right}>
        <div className={styles.first_sect}>
          <div className={styles.done_icon}>
            <Image src={Done} alt="logo" />
          </div>

          <div className={styles.content}>
            <h1>
              We are excited to have you as part of our healthcare network.
            </h1>
            <p>
              Please note that we are currently in the process of verifying the
              information you provided during registration to ensure the
              accuracy and reliability of the data in our system
            </p>
          </div>
        </div>

        <Link href="/health_center/signup_three" className={styles.button_cont}>
          <Button
            //   onClick={someFunction}
            text="Continue"
            //   className="custom-class"
          />
        </Link>
      </section>
    </div>
  );
}
