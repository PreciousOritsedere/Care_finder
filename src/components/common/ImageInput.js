import Image from "next/image";
import styles from "../../styles/imageInput.module.css";
import Camera from "../../../public/assets/register/add cam.svg";

export default function ImageInput({ onChange, fileName }) {
  return (
    <label className={styles.cont}>
      <div className={styles.add_icon}>
        <Image src={Camera} alt="camera" />
        <p>Add Photo</p>
        <p>{fileName}</p>
        <input
        //   id="fileInput"
          type="file"
          style={{ display: "none" }}
          onChange={onChange}
        />
      </div>
    </label>
  );
}
