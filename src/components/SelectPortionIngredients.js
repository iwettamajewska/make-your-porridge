import { ingredients } from "./data/ingredients";

const SelectPortionIngredients = ({ name, weight, unit }) => {
  //   const checkedElems = ingredients.filter(
  //     (ingredients) => ingredients.isChecked === true
  //   );

  return (
    <>
      <form className="unit-select">
        <select>
          {ingredients.option.map((item, index) => (
            <option>
              name={item.option.name}
              weight={item.option.weight}
              unit={item.option.unit}
              key={index}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default SelectPortionIngredients;
