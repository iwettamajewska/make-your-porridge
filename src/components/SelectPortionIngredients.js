const SelectPortionIngredients = ({ name, options, onChange }) => {
  //   const checkedElems = ingredients.filter(
  //     (ingredients) => ingredients.isChecked === true
  //   );

  return (
    <select className="select-portions-ingredients" onChange={onChange}>
      {options.map((option) => (
        <option key={`${name}_portion_${option.id}`} value={option.weight}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectPortionIngredients;
