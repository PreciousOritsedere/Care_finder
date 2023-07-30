import styles from "../../styles/Textarea.module.css";

const Textarea = ({ value, onChange, placeholder, name }) => {
  return (
    <textarea
      className={styles.textarea}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        console.log("onChange triggered");
        if (onChange) {
          onChange(e);
        }
      }}
      rows={4}
    />
  );
};

export default Textarea;
