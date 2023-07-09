import { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/results.module.css";
import SearchBar from "@/components/SearchBar";
import Layout from "@/components/Layout";
import { SearchResultsContext } from "@/context/SearchResults/SearchResultsContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore as db } from "../../../firebase"; // Adjust the path as per your folder structure
// import Hospital_logo from "../../public/assets/results/hospital logo.svg";
import Stars from "../../../../public/assets/home/Rating stars.svg";
import Download from "../../../../public/assets/results/download.svg";
import Share from "../../../../public/assets/results/share.svg";

export async function getServerSideProps(context) {
  // Extract the parameters from the URL
  const { country, state } = context.params;

  // Create a query against the collection
  const q = query(
    collection(db, "hospitals"),
    where("country", "==", country),
    where("state", "==", state)
  );

  const querySnapshot = await getDocs(q);

  const hospitals = [];
  querySnapshot.forEach((doc) => {
    hospitals.push({ id: doc.id, ...doc.data() });
  });

  // Return the hospitals array as a prop to your page
  return { props: { hospitals, country, state } };
}

export default function Results({ hospitals, country, state }) {
  const { searchResults, setSearchResults } = useContext(SearchResultsContext);

  // Synchronize the server-side props with the client-side context
  useEffect(() => {
    setSearchResults({
      selectedCountry: country,
      selectedState: state,
      hospitals,
    });
  }, [hospitals, country, state, setSearchResults]);


  return (
    <Layout>
      <section className={styles.container}>
        <SearchBar />
        <section className={styles.sec_sect}>
          {searchResults.hospitals.map((hospital) => (
            <Link href={`/profile/${hospital.id}`} key={hospital.id} className={styles.hospital_cont}>
              <div className={styles.hospital_preview}>
                <div className={styles.image_cont}>
                  <Image
                    src={hospital.images[0]}
                    alt="hospital logo"
                    width={78}
                    height={78}
                  />
                </div>
                <div className={styles.hospital_details}>
                  <h2>{hospital.healthcareName}</h2>
                  <p>{hospital.healthcareAddress}</p>
                  <Image src={Stars} alt="stars" />
                </div>
              </div>

              <div className={styles.btns_cont}>
                <button>
                  <Image src={Download} alt="download" />
                  Download CSV
                </button>
                <button>
                  <Image src={Share} alt="share" />
                  Share
                </button>
              </div>
            </Link>
          ))}
        </section>
      </section>
    </Layout>
  );
}
