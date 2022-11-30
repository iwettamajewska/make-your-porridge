import IngredientCheckbox from "./IngredientCheckbox";
import { ingredients } from "./data/ingredients";

const IngredientsList = ({ onChange, noChecked }) => {
  const checkedElems = ingredients.filter(
    (ingredients) => ingredients.isChecked === true
  );

  return (
    <>
      <h2 className="choose-ingredients-text">choose maximum 5 ingredients:</h2>
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
      </form>
      {checkedElems.length >= 5 && (
        <p className="alert-text">Select only 5 ingredients</p>
      )}
    </>
  );
};

export default IngredientsList;
