import styles from "../../styles/Button.module.css";

export default function Button({
  onClick,
  text,
  className,
  disabled,
  type = "button",
}) {
  return (
    <div className={styles.container}>
      <button
        // onClick={onClick}
        onClick={(e) => {
          console.log('Button clicked');
          if(onClick) onClick(e);
        }}
        className={className}
        disabled={disabled}
        type={type}
      >
        {text}
      </button>
    </div>
  );
}
