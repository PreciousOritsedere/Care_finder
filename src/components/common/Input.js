import styles from "../../styles/Input.module.css";

export default function Input({ type, value, onChange, placeholder }) {
  return (
    <div className={styles.container}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
