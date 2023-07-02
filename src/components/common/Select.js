import styles from "../../styles/Select.module.css";

export default function Select({ options, name, value, onChange }) {
  console.log(value);
  return (
    <div className={styles.container}>
      <select value={value} name={name} onChange={onChange}>
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
