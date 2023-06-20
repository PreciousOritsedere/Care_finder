import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "../styles/Home.module.css";
import SearchBar from "@/components/SearchBar";
import Review from "@/components/Review";
import DoctorImage from "../assets/home/female_doctor.svg";
import HospitalImage from "../assets/home/hospitalImage.svg";
import Background_icons from "@/assets/home/background_icons.svg";
import Pry_HealthCare from "../assets/home/primary healthcare icon.svg";
import Drugs_icon from "../assets/home/drugs.svg";
import Right_arrow from "../assets/home/right arrow.svg";
import Dentist from "../assets/home/dentist.svg";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.first_cont}>
          <h1>
            Find Your Nearest Hospital in Just a Few <span>Clicks!</span>
          </h1>
          <p>
            Experience the peace of mind that comes from knowing that medical
            help is just a <span>click</span> away.
          </p>
          <SearchBar />
        </section>

        <section
          className={styles.second_sect}
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <div className={styles.second_sect_Image}>
            <Image src={DoctorImage} alt="doctor image" />
          </div>
          <div className={styles.second_sect_content}>
            <h2 className="aos-animate">
              We are the solution of finding hospitals in your city
            </h2>
            <p className="aos-animate">
              Our mission is to provide you with the necessary tools and
              information to make informed decisions about your healthcare needs
            </p>
          </div>
        </section>

        <section className={styles.third_sect}>
          <div className={styles.hospital_image}>
            <Image src={HospitalImage} alt="hospital image" />
          </div>
          <div className={styles.third_sect_sub}>
            <div className={styles.third_sect_content}>
              <h2>Do you have a health centre?</h2>
              <p>
                Our mission is to provide you with the necessary tools and
                information to make informed decisions about your healthcare
                needs
              </p>
            </div>
            <button>Register Health Centre</button>
          </div>
        </section>

        <section className={styles.fourth_sect}>
          <h1>The Best Quality Service You Can Get</h1>
          <div className={styles.fourth_sect_sub}>
            <div className={styles.fourth_sect_box}>
              <Image src={Pry_HealthCare} alt="primary healthcare icon" />
              <div>
                <h3>Primary care</h3>
                <div className={styles.fourth_sect_box_content}>
                  <p>Find the nearest centre</p>
                  <Image src={Right_arrow} alt="right arrow" />
                </div>
              </div>
            </div>

            <div className={styles.fourth_sect_box}>
              <Image src={Drugs_icon} alt="drugs icon" />
              <div>
                <h3>Drugs</h3>
                <div className={styles.fourth_sect_box_content}>
                  <p>Find the nearest centre</p>
                  <Image src={Right_arrow} alt="right arrow" />
                </div>
              </div>
            </div>

            <div className={styles.fourth_sect_box}>
              <Image src={Pry_HealthCare} alt="primary healthcare icon" />
              <div>
                <h3>Primary care</h3>
                <div className={styles.fourth_sect_box_content}>
                  <p>Find the nearest centre</p>
                  <Image src={Right_arrow} alt="right arrow" />
                </div>
              </div>
            </div>

            <div className={styles.fourth_sect_box}>
              <Image src={Drugs_icon} alt="drugs icon" />
              <div>
                <h3>Drugs</h3>
                <div className={styles.fourth_sect_box_content}>
                  <p>Find the nearest centre</p>
                  <Image src={Right_arrow} alt="right arrow" />
                </div>
              </div>
            </div>

            <div className={styles.fourth_sect_box}>
              <Image src={Pry_HealthCare} alt="primary healthcare icon" />
              <div>
                <h3>Primary care</h3>
                <div className={styles.fourth_sect_box_content}>
                  <p>Find the nearest centre</p>
                  <Image src={Right_arrow} alt="right arrow" />
                </div>
              </div>
            </div>

            <div className={styles.fourth_sect_box}>
              <Image src={Drugs_icon} alt="drugs icon" />
              <div>
                <h3>Drugs</h3>
                <div className={styles.fourth_sect_box_content}>
                  <p>Find the nearest centre</p>
                  <Image src={Right_arrow} alt="right arrow" />
                </div>
              </div>
            </div>

            <div className={styles.fourth_sect_box}>
              <Image src={Pry_HealthCare} alt="primary healthcare icon" />
              <div>
                <h3>Primary care</h3>
                <div className={styles.fourth_sect_box_content}>
                  <p>Find the nearest centre</p>
                  <Image src={Right_arrow} alt="right arrow" />
                </div>
              </div>
            </div>

            <div className={styles.fourth_sect_box}>
              <Image src={Drugs_icon} alt="drugs icon" />
              <div>
                <h3>Drugs</h3>
                <div className={styles.fourth_sect_box_content}>
                  <p>Find the nearest centre</p>
                  <Image src={Right_arrow} alt="right arrow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Review />

        {/* <Location_search /> */}
      </main>
    </Layout>
  );
}
