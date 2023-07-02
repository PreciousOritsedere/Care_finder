import styles from "../../styles/Textarea.module.css";

const Textarea = ({ value, onChange, placeholder, type }) => {
  return (
    <textarea className={styles.textarea}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      rows={4} // Adjust the number of rows as needed
    />
  );
};

export default Textarea;
