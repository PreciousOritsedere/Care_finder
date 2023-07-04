import { useEffect, useRef, useState } from "react";
import { useFormData } from "@/context/FormData/FormDataContext";
import Image from "next/image";
import Link from "next/link";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import style from "../styles/adminInfo.module.css";
import UserIcon from "../../public/assets/register/user icon.svg";
import Camera from "../../public/assets/register/camera.svg";
import Right_Arrow from "../../public/assets/register/right arrow.svg";
import Input from "./common/Input";
import Button from "./common/Button";

export default function AdminInfo() {
  const { formData, updateFormData } = useFormData();
  const [formState, setFormState] = useState({});
  const [image, setImage] = useState(UserIcon);
  const fileInputRef = useRef();

  const isFormValid = Object.values(formData).every((value) => value !== "");

  const handleOnChange = (e) => {
    const newFormState = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormState(newFormState);
    updateFormData(newFormState);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("Error uploading image: ", error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };

  const openFileInput = () => {
    fileInputRef.current.click(); // open file input when the hidden file input is clicked
  };

  return (
    <section className={style.container}>
      <h1>Administrator</h1>

      <form>
        <div className={style.userImage_cont}>
          <Image src={image} alt="user icon" />
          <div className={style.camIcon_cont} onClick={openFileInput}>
            <Image src={Camera} alt="camera icon" />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
        </div>

        <div className={style.form}>
          <div className={style.form_input}>
            <Input type="text" placeholder="First Name" />
          </div>
          <div className={style.form_input}>
            <Input type="text" placeholder="Surname" required />
          </div>
          <div className={style.form_input}>
            <Input type="tel" placeholder="Phone No" required />
          </div>
          <div className={style.form_input}>
            <Input type="email" placeholder="Email" required />
          </div>
          <div className={style.form_input}>
            <Input type="position" placeholder="Position" required />
          </div>
        </div>
        <button className={style.add_new}>Add New Administrator</button>

        <div className={style.link_wrapper}>
          <Link href="/health_center/signup_two" className={style.button_cont}>
            <Button
              //   onClick={someFunction}
              text="Continue"
              //   className="custom-class"
            />
            <Image src={Right_Arrow} alt="right arrow" />
          </Link>
        </div>
      </form>
    </section>
  );
}
