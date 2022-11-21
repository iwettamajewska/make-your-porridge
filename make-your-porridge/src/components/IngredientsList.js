import IngredientCheckbox from "./IngredientCheckbox";
import { ingredients } from "./data/ingredients";

const IngredientsList = ({ onChange, checked, noChecked }) => {
  const checkedElems = ingredients.filter(
    (ingredients) => ingredients.isChecked === true
  );

  return (
    <>
      <h2 className="choose-ingredients-text">choose ingredients:</h2>
      <form className="food-select">
        {ingredients.map((item, index) => (
          <IngredientCheckbox
            name={item.name}
            value={item.name}
            checked={item.isChecked}
            noChecked={noChecked}
            disabled={checkedElems.length >= 5 && !item.isChecked}
            onChange={() => onChange(item)}
            htmlFor={item.name}
            labelText={item.name}
            key={index}
          />
        ))}
        {checkedElems.length >= 5 && (
          <p className="alert-text">Select only 3 ingredients</p>
        )}
      </form>
    </>
  );
};

export default IngredientsList;
