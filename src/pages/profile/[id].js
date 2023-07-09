import { useState, useRef, useEffect } from "react";
import { storage, firestore as db } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/profile.module.css";
import Logo from "../../../public/assets/profile/logo.svg";
import Camera from "../../../public/assets/profile/camera.svg";
import Stars from "../../../public/assets/home/Rating stars.svg";
import Download from "../../../public/assets/results/download.svg";
import Share from "../../../public/assets/results/share.svg";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const docRef = doc(db, "hospitals", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { props: { hospital: { id: docSnap.id, ...docSnap.data() } } };
  } else {
    return { notFound: true };
  }
}

export default function Profile({ hospital }) {
  const [coverPhotoUrl, setCoverPhotoUrl] = useState(hospital.coverPhotoUrl);
  const [downloadButtonText, setDownloadButtonText] = useState("Download CSV");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const fileInputRef = useRef();
  const dropdownRef = useRef();


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `cover_photo/${file.name}`);

    //create the file metadata
    let metadata = {
      contentType: "image/jpeg",
    };

    //upload the file and metatdata
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
        toast.error("Failed to upload cover photo");
      },
      () => {
        //upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            setCoverPhotoUrl(downloadURL);
            localStorage.setItem("coverPhotoUrl", downloadURL);
            toast.success("Successfully uploaded cover photo");

            //update the hospital document
            const docRef = doc(db, "hospitals", hospital.id);
            updateDoc(docRef, {
              coverPhotoUrl: downloadURL,
            });
          })
          .catch((error) =>
            console.error("Error getting download URL:", error)
          );
      }
    );
  };

  const handleUploadClick = (e) => {
    fileInputRef.current.click();
  };

  const objectToCSV = (obj) => {
    // Initialize an array to hold our individual CSV rows
    const csvRows = [];

    // Get the object keys and use them as CSV headers
    const headers = Object.keys(obj);
    csvRows.push(headers.join(","));

    // Get the object values and add them as another row
    const values = headers.map((header) => `"${obj[header]}"`);
    csvRows.push(values.join(","));

    // Join all rows together with newline characters to form the final CSV string
    return csvRows.join("\n");
  };

  const handleDownloadClick = async () => {
    setDownloadButtonText("Downloading...");
    const csvData = objectToCSV(hospital);

    const blob = new Blob([csvData], { type: "text/csv" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.download = "hospital_data.csv";
    link.href = url;
    link.click();

    setDownloadButtonText("Download CSV");
  };

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.cover_photo}>
          {coverPhotoUrl ? (
            <img
              src={coverPhotoUrl}
              alt="Cover photo"
              width={500}
              height={500}
            />
          ) : (
            <div className={styles.uploadPrompt}>Upload your cover photo</div>
          )}
          <div className={styles.cam_icon} onClick={handleUploadClick}>
            <Image src={Camera} alt="Camera" />
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <div className={styles.profile_logo}>
            <Image
              src={hospital.images[0]}
              alt="hospital logo"
              width={92}
              height={86}
            />
          </div>
        </div>

        <div className={styles.profile_info}>
          <div className={styles.info_first_sect}>
            <div className={styles.profile_name_cont}>
              <div className={styles.profile_name}>
                <h1>{hospital.healthcareName}</h1>
                <p>{hospital.healthcareAddress}</p>
                <Image src={Stars} alt="Stars" />
              </div>
              <div className={styles.btns_cont}>
                <button onClick={handleDownloadClick}>
                  <Image src={Download} alt="download" />
                  {downloadButtonText}
                </button>
                <div className={styles.share_button_wrapper}>
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <Image src={Share} alt="share" />
                    Share
                  </button>
                  {isDropdownOpen && (
                    <div
                      className={`${styles.share_dropdown} ${
                        isDropdownOpen ? "" : "hidden"
                      }`}
                      ref={dropdownRef}
                    >
                      <FacebookShareButton
                        url={window.location.href}
                        quote="Hey!, check out this healthcare center from CareFinder"
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>

                      <TwitterShareButton
                        url={window.location.href}
                        title="Hey!, check out this healthcare center from CareFinder"
                      >
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>

                      <WhatsappShareButton
                        url={window.location.href}
                        title="Hey!, check out this healthcare center from CareFinder"
                      >
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>

                      <EmailShareButton
                        url={window.location.href}
                        subject="Hey!, check out this healthcare center from CareFinder"
                      >
                        <EmailIcon size={32} round />
                      </EmailShareButton>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.descriptions}>
              <h3>Hospital Description</h3>

              <p>{hospital.aboutHealthcare}</p>
            </div>
          </div>

          <div className={styles.info_sec_sect}>
            <h2>Gallery</h2>
            <div className={styles.gallery_cont}>
              {hospital.images.slice(1).map((imgSrc, index) => (
                <div key={index} className={styles.hospital_image}>
                  <Image
                    src={imgSrc}
                    alt={`Gallery ${index + 1}`}
                    width={50}
                    height={50}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
