import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "../styles/Home.module.css";
import SearchBar from "@/components/SearchBar";
import DoctorImage from "../assets/home/female_doctor.svg";
import Background_icons from "@/assets/home/background_icons.svg";

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
            <h2>We are the solution of finding hospitals in your city</h2>
            <p>
              Our mission is to provide you with the necessary tools and
              information to make informed decisions about your healthcare needs
            </p>
          </div>
        </section>

        {/* <Location_search /> */}
      </main>
    </Layout>
  );
}
