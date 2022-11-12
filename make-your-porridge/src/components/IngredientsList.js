import IngredientCheckbox from "./IngredientCheckbox";
import { ingredients } from "./data/ingredients";

const IngredientsList = ({ onChange, checked, noChecked }) => {
  // const handleOnChange = (event, item) => {
  //   onChange(event);
  //   setBowl([...bowl, item]);
  // };

  return (
    <>
      <p>choose ingredients</p>
      <form className="food-select">
        {ingredients.map((item, index) => (
          <IngredientCheckbox
            name={item.name}
            value={item.name}
            checked={checked}
            noChecked={noChecked}
            // onChange={onChange}
            onChange={() => onChange(item, index)}
            htmlFor={item.name}
            labelText={item.name}
            key={index}
          />
        ))}
      </form>
    </>
  );
};

export default IngredientsList;
