const SelectOats = ({ name, options, onChangeWeightOats }) => {
  //   const checkedElems = ingredients.filter(
  //     (ingredients) => ingredients.isChecked === true
  //   );

  return (
    <>
      <p>choose portion of oats</p>
      <select className="select-oats" onChange={onChangeWeightOats}>
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
