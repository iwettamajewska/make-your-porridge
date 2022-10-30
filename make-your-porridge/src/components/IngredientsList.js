import IngredientCheckbox from "./IngredientCheckbox";
import { ingredients } from "./data/ingredients";
import { useState } from "react";

const IngredientsList = ({ onChange, checked, noChecked }) => {
  return (
    <>
      <p>choose ingredients</p>
      <form className="food-select">
        {ingredients.map(({ name, index }) => (
          <IngredientCheckbox
            name={name}
            value={name}
            checked={checked}
            onChange={onChange}
            htmlFor={name}
            labelText={name}
            key={index}
          />
        ))}
      </form>
    </>
  );
};

export default IngredientsList;
