import styles from "../../styles/Welcome.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";
import Hexagon from "../../../public/assets/register/hexagon.svg";
import Logo from "../../../public/assets/register/logo.svg";
import Right_Arrow from "../../../public/assets/register/right arrow.svg";

export default function welcome() {
  return (
    <div className={styles.container}>
      <aside className={styles.left}>
        <Image src={Hexagon} alt="hexagon" />
      </aside>

      <section className={styles.right}>
        <Image src={Logo} alt="logo" />

        <div className={styles.content}>
          <h1>Welcome to Carefinder </h1>
          <p>
            There are a few essential forms you will need to complete to list
            your hospital.
          </p>
        </div>

        <Link href="/health_center/signup_two" className={styles.button_cont}>
          <Button
            //   onClick={someFunction}
            text="Continue"
            //   className="custom-class"
          />
          <Image src={Right_Arrow} alt="right arrow" />
        </Link>
      </section>
    </div>
  );
}
