import styles from "../../styles/Select.module.css";

export default function Select({ options, value, onChange }) {
  return (
    <div className={styles.container}>
      <select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
