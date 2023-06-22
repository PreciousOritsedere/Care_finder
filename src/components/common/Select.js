export default function Select({ options, value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
