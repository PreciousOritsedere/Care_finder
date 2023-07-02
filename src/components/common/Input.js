import styles from "../../styles/Input.module.css";

export default function Input({ type, name, value, onChange, placeholder }) {
  console.log(value);
  return (
    <div className={styles.container}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
