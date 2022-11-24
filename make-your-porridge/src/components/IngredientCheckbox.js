const IngredientCheckbox = ({
  name,
  value,
  checked,
  onChange,
  htmlFor,
  labelText,
  disabled,
}) => {
  return (
    <span className="ingredient-option-wrapper">
      <input
        className="ingredient-option"
        name={name}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={htmlFor}>{labelText}</label>
    </span>
  );
};

export default IngredientCheckbox;
