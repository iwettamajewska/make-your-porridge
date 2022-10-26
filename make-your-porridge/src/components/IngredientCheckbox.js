import React from "react";

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
        className="option"
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
