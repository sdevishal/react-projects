import style from "./CustomFormField.module.css";

export const Input = ({ label, name, id, value, onChange, error }) => {
  return (
    <div className={style["input-group"]}>
      <label>{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
      <p className={style["errMsg"]}>{error}</p>
    </div>
  );
};

export const Select = ({
  label,
  name,
  id,
  value,
  onChange,
  error,
  options,
  defaultOption,
}) => {
  return (
    <div className={style["input-group"]}>
      <label>{label}</label>
      <select name={name} id={id} value={value} onChange={onChange}>
        <option hidden>{defaultOption}</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className={style["errMsg"]}>{error}</p>
    </div>
  );
};
