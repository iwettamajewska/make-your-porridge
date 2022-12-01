const SelectOats = ({ name, options, onChange }) => {
  //   const checkedElems = ingredients.filter(
  //     (ingredients) => ingredients.isChecked === true
  //   );

  return (
    <>
      <p>choose portion of oats</p>
      <select onChange={onChange}>
        {options.map((option) => (
          <option key={`${name}_portion_${option.id}`} value={option.weight}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectOats;
