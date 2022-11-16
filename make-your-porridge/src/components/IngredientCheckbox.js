const IngredientCheckbox = ({
  name,
  value,
  checked,
  onChange,
  htmlFor,
  labelText,
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
      />
      <label htmlFor={htmlFor}>{labelText}</label>
    </>
  );
};

export default IngredientCheckbox;

// https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
