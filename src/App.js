import "./App.css";
import ImageIngredients from "./components/ImagesIngredients";
import IngredientsList from "./components/IngredientsList";
import { useState } from "react";
import NutritionTable from "./components/NutritionTable";
import { constantIngredient, ingredients } from "./components/data/ingredients";
import SelectOats from "./components/SelectOats";

function App() {
  const [bowl, setBowl] = useState([constantIngredient]);
  const [nutritions, setNutritions] = useState({});

  const calculateNutritions = (checkedElems) => {
    Object.keys(constantIngredient).map((nutrition) => {
      return setNutritions((prevState) => ({
        ...prevState,
        [nutrition]: checkedElems.reduce((acc, item) => {
          return acc + item[nutrition] * item.chosenWeight;
        }, constantIngredient[nutrition]),
      }));
    });
  };

  const handleOnChange = (item) => {
    item.isChecked = !item.isChecked;

    const checkedElems = ingredients.filter(
      (ingredients) => ingredients.isChecked === true
    );

    calculateNutritions(checkedElems);
    // setBowl(checkedElems);
    setBowl([constantIngredient, ...checkedElems]);
  };

  const handleOnChangeWeight = (item, weight) => {
    console.log("hey");
    const bowlItemKey = bowl.findIndex((i) => i.id === item.id);
    const newBowl = [...bowl];
    console.log(newBowl[bowlItemKey], "TUTAJ");
    console.log(newBowl);
    console.log(bowlItemKey);
    newBowl[bowlItemKey].chosenWeight = weight;

    console.log(bowl);
    console.log(item);
    console.log(weight);
    setBowl(newBowl);
    calculateNutritions(newBowl);
  };

  return (
    <div className="container">
      <h1 className="tittle-text">Make your perfect porridge</h1>
      <SelectOats
        // name={item.name}
        options={constantIngredient.options}
        // onChangeWeightOats={(e) => onChangeWeight(item, e.target.value)}
        // onChangeWeightOats={(e) =>
        //   handleOnChangeWeight(constantIngredient, e.target.value)
        // }
        onChangeWeightOats={(e) =>
          handleOnChangeWeight(constantIngredient, e.target.value)
        }
      />
      <IngredientsList
        onChange={handleOnChange}
        onChangeWeight={handleOnChangeWeight}
        bowl={bowl}
      />
      <NutritionTable nutritions={nutritions} />
      <ImageIngredients bowl={bowl} />
    </div>
  );
}

export default App;
