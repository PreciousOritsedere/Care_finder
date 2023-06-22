import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Logo from "../../public/assets/footer/logo.svg";
import Facebook from "../../public/assets/footer/facebook.svg";
import Twitter from "../../public/assets/footer/twitter.svg";
import Instagram from "../../public/assets/footer/instagram.svg";
import Linkedin from "../../public/assets/footer/linkedin.svg";
import Whatsapp from "../../public/assets/footer/whatsapp.svg";

export default function Footer() {
  return (
    <section className={styles.cont}>
      <div className={styles.first_sect}>
        <div className={styles.logo}>
          <Image src={Logo} alt="" />
        </div>

        <div className={styles.info}>
          <div className={styles.info_content}>
            <h2>Carefinder</h2>
            <div>
              <p>About Us</p>
              <p>Drugs</p>
              <p>Healthcare</p>
              <p>Blog</p>
            </div>
          </div>

          <div className={styles.info_content}>
            <h2>Legal</h2>
            <div>
              <p>Terms & Conditions</p>
              <p>Privacy policy</p>
              <p>Copyright information</p>
            </div>
            
            <div className={styles.info_content}>
              <h2>Support</h2>
              <div>
                <p>FAQ</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.socials}>
          <h2>Social Media</h2>
          <div className={styles.socials_icon}>
            <Image src={Facebook} alt="facebook icon" />
            <Image src={Twitter} alt="twitter icon" />
            <Image src={Instagram} alt="instagram icon" />
            <Image src={Linkedin} alt="linkedin icon" />
            <Image src={Whatsapp} alt="whatsapp icon" />
          </div>
        </div>
      </div>

      <p className={styles.second_sect}>
        Copyright © Carefinder Systems Pty. Ltd. 2023. All Rights Reserved.
      </p>
    </section>
  );
}
