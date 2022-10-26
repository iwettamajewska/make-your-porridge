import React from "react";
import IngredientCheckbox from "./IngredientCheckbox";

const IngredientsList = ({ onChange, checked, noChecked }) => {
  return (
    <>
      <p>choose ingredients</p>
      <form className="food-select">
        <IngredientCheckbox
          name={"yoghurt"}
          value={"yoghurt"}
          checked={noChecked}
          onChange={onChange}
          htmlFor={"yoghurt"}
          labelText={"yoghurt"}
        />
        <IngredientCheckbox
          name={"cow milk"}
          value={"cow milk"}
          checked={checked}
          onChange={onChange}
          htmlFor={"cow milk"}
          labelText={"cow milk"}
        />
        <IngredientCheckbox
          name={"rice milk"}
          value={"rice milk"}
          checked={checked}
          onChange={onChange}
          htmlFor={"rice milk"}
          labelText={"rice milk"}
        />
        <IngredientCheckbox
          name={"banana"}
          value={"banana"}
          checked={checked}
          onChange={onChange}
          htmlFor={"banana"}
          labelText={"banana"}
        />
        <IngredientCheckbox
          name={"apple"}
          value={"apple"}
          checked={checked}
          onChange={onChange}
          htmlFor={"apple"}
          labelText={"apple"}
        />
        <IngredientCheckbox
          name={"orange"}
          value={"orange"}
          checked={checked}
          onChange={onChange}
          htmlFor={"orange"}
          labelText={"orange"}
        />
        <IngredientCheckbox
          name={"strawberries"}
          value={"strawberries"}
          checked={checked}
          onChange={onChange}
          htmlFor={"strawberries"}
          labelText={"strawberries"}
        />
        <IngredientCheckbox
          name={"blueberries"}
          value={"blueberries"}
          checked={checked}
          onChange={onChange}
          htmlFor={"blueberries"}
          labelText={"blueberries"}
        />
        <IngredientCheckbox
          name={"raspberries"}
          value={"raspberries"}
          checked={checked}
          onChange={onChange}
          htmlFor={"raspberries"}
          labelText={"raspberries"}
        />
        <IngredientCheckbox
          name={"walnut"}
          value={"walnut"}
          checked={checked}
          onChange={onChange}
          htmlFor={"walnut"}
          labelText={"walnut"}
        />
        <IngredientCheckbox
          name={"cashew"}
          value={"cashew"}
          checked={checked}
          onChange={onChange}
          htmlFor={"cashew"}
          labelText={"cashew"}
        />
        <IngredientCheckbox
          name={"chia seeds"}
          value={"chia seeds"}
          checked={checked}
          onChange={onChange}
          htmlFor={"chia seeds"}
          labelText={"chia seeds"}
        />
      </form>
    </>
  );
};

export default IngredientsList;
