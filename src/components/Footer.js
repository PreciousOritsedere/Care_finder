import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Logo from "../../public/assets/footer/logo.svg";

export default function Footer() {
  return (
    <section className={styles.cont}>
      <div>
        <div>
          <Image src={Logo} alt="" />
        </div>
      </div>

      <p>Copyright © Carefinder Systems Pty. Ltd. 2023. All Rights Reserved.</p>
    </section>
  );
}
