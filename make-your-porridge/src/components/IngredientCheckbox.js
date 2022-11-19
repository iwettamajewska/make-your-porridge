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
    <>
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
    </>
  );
};

export default IngredientCheckbox;
