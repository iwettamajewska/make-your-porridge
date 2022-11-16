import IngredientCheckbox from "./IngredientCheckbox";
import { ingredients } from "./data/ingredients";

const IngredientsList = ({ onChange, checked, noChecked, blabla }) => {
  // const handleOnChange = (event, item) => {
  //   onChange(event);
  //   setBowl([...bowl, item]);
  // };

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
            // onChange={onChange}
            onChange={() => onChange(item)}
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

// {ingredients.filter((ingredient) => ingredient.isChecked === true).map((item, index) => (

// const checkedElems = ingredients.filter(
//   (ingredient) => ingredient.isChecked === true
// );

// const BoxesMap = boxes.map((box, index) => (
//   <Box key={index} isNew={box.isNew} name={box.name} />
// ));
