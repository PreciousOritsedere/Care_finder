import Image from "next/image";
import { useState } from "react";
import styles from "../styles/imageInfo.module.css";
import AddImage from "../components/common/ImageInput";
import Button from "../components/common/Button";
import Right_Arrow from "../../public/assets/register/right arrow.svg";
import { useFormData } from "@/context/FormData/FormDataContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function ImageInfo() {
  const { updateFormData } = useFormData();
  const router = useRouter();
  const storage = getStorage();

  const [fileInputs, setFileInputs] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [fileNames, setFileNames] = useState(["", "", "", "", "", ""]);

  const handleOnchange = (e, index) => {
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      console.log(file.name);

      setFileInputs((prev) => {
        const newFileInputs = [...prev];
        newFileInputs[index] = file;
        return newFileInputs;
      });

      // Update the fileNames state
      setFileNames((prev) => {
        const newFileNames = [...prev];
        newFileNames[index] = file.name;
        return newFileNames;
      });
    }
  };

  const handleSubmit = async () => {
    try {
      if (fileInputs.some((file) => file === null)) {
        toast.error("Please upload all images");
      } else {
        const uploadPromises = fileInputs.map((file, index) => {
          console.log(`Starting upload for file ${index}: ${file.name}`);
          const storageRef = ref(
            storage,
            "hospital_images/" + Date.now() + "_" + file.name
          );
          const uploadTask = uploadBytesResumable(storageRef, file);

          return new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done for file ${index}`);
              },
              (error) => {
                console.error(`Upload failed for file ${index}`, error);
                reject(error);
              },
              async () => {
                const downloadURL = await getDownloadURL(
                  uploadTask.snapshot.ref
                );
                console.log(
                  `Upload finished for file ${index}. Download URL: ${downloadURL}`
                );
                resolve(downloadURL);
              }
            );
          });
        });

        const imageUrls = await Promise.all(uploadPromises);
        updateFormData({ images: imageUrls });
        setFileInputs([null, null, null, null, null, null]); // Clear inputs
        await router.push("/health_center/signup_three");
      }
    } catch (error) {
      console.error(
        "An error occurred when handling the form submission: ",
        error
      );
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.first_sect}>
        <h3>Brand Image</h3>
        <AddImage
          onChange={(e) => handleOnchange(e, 0)}
          fileName={fileNames[0]}
        />
      </div>

      <div className={styles.sec_sect}>
        <div className={styles.sub_content}>
          <h3>Product Images</h3>
          <p>
            Images need to be at least 200x200 pixel to 3000x3000 pixel. Maximum
            of 6 images are allowed
          </p>
        </div>

        <div>
          <div className={styles.inputs_cont}>
            <AddImage
              onChange={(e) => handleOnchange(e, 1)}
              fileName={fileNames[1]}
            />
            <AddImage
              onChange={(e) => handleOnchange(e, 2)}
              fileName={fileNames[2]}
            />
            <AddImage
              onChange={(e) => handleOnchange(e, 3)}
              fileName={fileNames[3]}
            />
            <AddImage
              onChange={(e) => handleOnchange(e, 4)}
              fileName={fileNames[4]}
            />
            <AddImage
              onChange={(e) => handleOnchange(e, 5)}
              fileName={fileNames[5]}
            />
            <AddImage
              onChange={(e) => handleOnchange(e, 6)}
              fileName={fileNames[6]}
            />
          </div>

          <div className={styles.link_wrapper} onClick={handleSubmit}>
            <div className={styles.button_cont}>
              <Button
                // onClick={handleSubmit}
                text="Continue"

                //   className="custom-class"
              />
              <Image src={Right_Arrow} alt="right arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
