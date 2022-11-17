const IngredientCheckbox = ({
  name,
  value,
  checked,
  onChange,
  htmlFor,
  labelText,
  // isError,
  // useForm,
  // boolean,
  // i,
}) => {
  // const { watch, register } = useForm < { toggles: boolean[null] } > null;
  // const toggles = watch("toggles", []);
  // const checkedCount = toggles.filter(Boolean).length;

  // ref={register}
  // name={`toggles[${i}]`}
  // disabled={!toggles[i] && checkedCount >= 3}
  {
    /* Checkbox {i + 1} */
  }

  // const errorAlert = isError ? "error" : "test";
  // const errorText = isError ? "select only  ingredients" : "";

  // {
  //   isError && <p className="error-text">Uzupełnij dane</p>;
  // }

  return (
    <>
      <input
        className="ingredient-option"
        name={name}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        // isError={isError}
      />
      <label htmlFor={htmlFor}>{labelText}</label>

      {/* <p className={errorAlert}>dddd{errorText}</p> */}
    </>
  );
};

export default IngredientCheckbox;

// https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
