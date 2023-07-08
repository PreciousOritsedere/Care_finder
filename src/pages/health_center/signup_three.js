import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useFormData } from "@/context/FormData/FormDataContext";
import { firestore } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import "firebase/firestore";
import styles from "../../styles/SignupThree.module.css";
import Doctor from "../../../public/assets/register/doctor.svg";
import Done from "../../../public/assets/register/done.svg";
import Button from "../../components/common/Button";

export default function Signup_three() {
  const router = useRouter();
  const { formData, updateFormData } = useFormData();

  const handleSubmit = async (e) => {
    try {
      console.log("Form submission started");
      const docRef = await addDoc(collection(firestore, "hospitals"), formData);
      console.log(`Document written with ID: ${docRef.id}`);

      updateFormData({}); // clear the form data
      console.log("Form data cleared");

      toast.success("Signup successful!");
      console.log("Navigating to /profile");
      router.push("/profile");
    } catch (error) {
      console.error("Error writing document: ", error);
      toast.error("signup failed, please try again later");
    }
  };
  return (
    <div className={styles.container}>
      <aside className={styles.left}>
        <Image src={Doctor} alt="doctor" />
      </aside>

      <section className={styles.right}>
        <div className={styles.first_sect}>
          <div className={styles.done_icon}>
            <Image src={Done} alt="logo" />
          </div>

          <div className={styles.content}>
            <h1>
              We are excited to have you as part of our healthcare network.
            </h1>
            <p>
              Please note that we are currently in the process of verifying the
              information you provided during registration to ensure the
              accuracy and reliability of the data in our system
            </p>
          </div>
        </div>

        <div className={styles.button_cont}>
          <Button
            //   onClick={someFunction}
            onClick={handleSubmit}
            text="Continue"
            //   className="custom-class"
          />
        </div>
      </section>
    </div>
  );
}
