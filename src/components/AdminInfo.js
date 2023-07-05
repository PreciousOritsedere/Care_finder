import { useEffect, useRef, useState } from "react";
import { useFormData } from "@/context/FormData/FormDataContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { storage, firestore } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, doc, setDoc } from "firebase/firestore";
import style from "../styles/adminInfo.module.css";
import UserIcon from "../../public/assets/register/user icon.svg";
import Camera from "../../public/assets/register/camera.svg";
import Right_Arrow from "../../public/assets/register/right arrow.svg";
import Input from "./common/Input";
import Button from "./common/Button";

export default function AdminInfo() {
  const { formData, updateFormData, imageURL, setImageURL } = useFormData();
  const [displayImage, setDisplayImage] = useState(UserIcon);
  const fileInputRef = useRef();
  const [adminCount, setAdminCount] = useState(1);
  const [formState, setFormState] = useState([
    {
      imageURL: "",
      firstName: "",
      surname: "",
      phone: "",
      email: "",
      position: "",
    },
  ]);

  // Generate array of admin forms
  const admins = [...Array(adminCount).keys()];

  const isFormValid = Object.values(formData).every((value) => value !== "");
  const router = useRouter();

  useEffect(() => {
    setDisplayImage(imageURL || UserIcon);
  }, [imageURL]);

  const handleOnChange = (e, index) => {
    const newFormState = [...formState]; //create a copy of the formState array
    // Update the specific form's state
    newFormState[index] = {
      ...newFormState[index],
      [e.target.name]: e.target.value,
    };
    console.log(newFormState);
    setFormState(newFormState);
    updateFormData(newFormState);
  };

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];

    if (file) {
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

            // Update imageURL in the specific form's state
            const newFormState = [...formState];
            newFormState[index] = {
              ...newFormState[index],
              imageURL: downloadURL,
            };
            setFormState(newFormState);

            // store imageURL in localStorage
            localStorage.setItem("imageURL", downloadURL);

            //save the URL to firestore
            const docRef = doc(collection(firestore, "adminImages"));

            setDoc(docRef, { imageUrl: downloadURL })
              .then(() => {
                console.log("URL saved successfully with id: ", docRef.id);

                // Save the document id to the form data
                updateFormData({
                  ...formData,
                  imageId: docRef.id,
                });
              })
              .catch((error) => {
                console.error("Error saving image URL: ", error);
              });
          });
        }
      );
    }
  };

  const handleAddAdmin = () => {
    setAdminCount((prevAdminCount) => prevAdminCount + 1);
    // Add a new initial form state object to the formState array
    setFormState((prevState) => [
      ...prevState,
      {
        firstName: "",
        surname: "",
        phone: "",
        email: "",
        position: "",
      },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = formState.every((admin) =>
      Object.values(admin).every((value) => value !== "")
    );

    // form validation and data processing here...

    if (isFormValid) {
      // Transform formState array into an object
      const formStateObject = formState.reduce((obj, item, index) => {
        obj[`admin_${index + 1}`] = item;
        return obj;
      }, {});

      await updateFormData(formStateObject); // Wait for context update to finish
      router.push({
        pathname: "/health_center/signup_two",
        query: { tab: "healthcareinfo" },
      });

      // Reset form data after successful submission
      setFormState([
        {
          imageURL: "",
          firstName: "",
          surname: "",
          phone: "",
          email: "",
          position: "",
        },
      ]);

      // Clear file input after successful submission
      fileInputRef.current.value = "";

      console.log("Form data updated, navigation done, and file input cleared");
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click(); // open file input when the hidden file input is clicked
  };

  return (
    <section className={style.container}>
      <h1>Administrator</h1>

      {formState.map((admin, index) => (
        <form key={index} onSubmit={(e) => handleSubmit(e, index)}>
          <div className={style.userImage_cont}>
            <Image
              src={admin.imageURL || UserIcon}
              alt="user icon"
              width={120}
              height={120}
            />
            <div className={style.camIcon_cont} onClick={openFileInput}>
              <Image src={Camera} alt="camera icon" />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={(e) => handleImageUpload(e, index)}
                style={{ display: "none" }}
              />
            </div>
          </div>

          <div className={style.form}>
            <div className={style.form_input}>
              <Input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={admin.firstName}
                onChange={(e) => handleOnChange(e, index)}
                required
              />
            </div>
            <div className={style.form_input}>
              <Input
                type="text"
                placeholder="Surname"
                name="surname"
                value={admin.surname}
                onChange={(e) => handleOnChange(e, index)}
                required
              />
            </div>
            <div className={style.form_input}>
              <Input
                type="tel"
                placeholder="Phone No"
                name="phone"
                value={admin.phone}
                onChange={(e) => handleOnChange(e, index)}
                required
              />
            </div>
            <div className={style.form_input}>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={admin.email}
                onChange={(e) => handleOnChange(e, index)}
                required
              />
            </div>
            <div className={style.form_input}>
              <Input
                type="position"
                placeholder="Position"
                name="position"
                value={admin.position}
                onChange={(e) => handleOnChange(e, index)}
                required
              />
            </div>
          </div>
          <button className={style.add_new} onClick={handleAddAdmin}>
            Add New Administrator
          </button>
        </form>
      ))}
      <div className={style.link_wrapper}>
        <div className={style.button_cont}>
          <Button
            type="button"
            onClick={handleSubmit}
            text="Continue"
            disabled={!isFormValid}
          />
          <Image src={Right_Arrow} alt="right arrow" />
        </div>
      </div>
    </section>
  );
}
