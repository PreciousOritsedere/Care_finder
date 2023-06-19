import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "../styles/Home.module.css";
import SearchBar from "@/components
import Background_icons from "@/assets/home/background_icons.svg";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.first_cont}>
          <h1>
            Find Your Nearest Hospital in Just a Few <span>Clicks!</span>
          </h1>
          <p>
            Experience the peace of mind that comes from knowing that medical
            help is just a <span>click</span> away.
          </p>
          {/* <SearchBar /> */}
        </div>
        {/* <Location_search /> */}
      </main>
    </Layout>
  );
}
