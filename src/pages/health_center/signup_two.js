import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/SignupTwo.module.css";
import Image from "next/image";
import Link from "next/link";
import Doctor from "../../../public/assets/register/doctor.svg";
import User from "../../../public/assets/register/user icon.svg";
import Camera from "../../../public/assets/register/camera.svg";
import Right_Arrow from "../../../public/assets/register/greater than.svg";
import AdminInfo from "../../components/AdminInfo";
import HealthCareInfo from "../../components/HealthCareInfo";
import ImageInfo from "../../components/ImageInfo";
// import TabContent from "./signup_two/[tabName]";

export default function Signup_two() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(
    router.query.tabName || "admininfo"
  );

  useEffect(() => {
    if (router.query.tab) setActiveTab(router.query.tab);
  }, [router.query.tab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    router.push({
      pathname: '/health_center/signup_two',
      query: { tab: tabName },
    });
  };

  return (
    <div className={styles.container}>
      <aside className={styles.left}>
        <Image src={Doctor} alt="doctor image" />
      </aside>

      <section className={styles.right}>
        <div
          className={`${styles.tab} ${
            activeTab === "admininfo" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("admininfo")}
        >
          <p>1</p>
          <div className={styles.tab_name}>
            <h3>Admin Info </h3>
            <Image src={Right_Arrow} alt="right arrow" />
          </div>
        </div>

        <div
          className={`${styles.tab} ${
            activeTab === "healthcareinfo" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("healthcareinfo")}
        >
          <p>2</p>
          <div className={styles.tab_name}>
            <h3>Health care Info</h3>
            <Image src={Right_Arrow} alt="right arrow" />
          </div>
        </div>

        <div
          className={`${styles.tab} ${
            activeTab === "imageinfo" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("imageinfo")}
        >
          <p>3</p>
          <div className={styles.tab_name}>
            <h3>Images</h3>
            <Image src={Right_Arrow} alt="right arrow" />
          </div>
        </div>
      </section>
      {/* Conditionally render tab content */}
      {activeTab === "admininfo" && <AdminInfo />}
      {activeTab === "healthcareinfo" && <HealthCareInfo />}
      {activeTab === "imageinfo" && <ImageInfo />}
    </div>
  );
}
