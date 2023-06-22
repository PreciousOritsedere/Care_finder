import styles from "../../styles/Button.module.css";

export default function Button({ onClick, text, className }) {
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={className}>
        {text}
      </button>
    </div>
  );
}
