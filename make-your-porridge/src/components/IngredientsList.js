import React from "react";
import IngredientCheckbox from "./IngredientCheckbox";
import { ingredients } from "./data/ingredients";

const IngredientsList = ({ onChange, checked, noChecked }) => {
  return (
    <>
      <p>choose ingredients</p>
      <form className="food-select">
        {ingredients.map(({ name }) => (
          <IngredientCheckbox
            name={name}
            value={name}
            checked={noChecked}
            onChange={onChange}
            htmlFor={name}
            labelText={name}
          />
        ))}
      </form>
    </>
  );
};

export default IngredientsList;
