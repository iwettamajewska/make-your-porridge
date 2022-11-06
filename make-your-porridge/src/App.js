import "./App.css";
import ImageIngredients from "./components/ImagesIngredients";
import IngredientsList from "./components/IngredientsList";
import { useState } from "react";
// import { ingredients } from "./components/data/ingredients";

function App() {
  const [checked, setChecked] = useState(false);
  // const [checked, setChecked] = useState(
  //   new Array(ingredients.length).fill(false)
  // );
  const [bowl, setBowl] = useState([]); // to jest nasza miska z owsianką
  // console.log(bowl);

  // const getChecked = (position) => {
  //   const updatedCheckedState = checked.map((item, index) =>
  //     index === position ? !item : item
  //   );
  // };

  // setChecked(updatedCheckedState);

  const calories = bowl.reduce((acc, item) => {
    return acc + item.kcal;
  }, 0);
  console.log(calories);

  const amountProtein = bowl.reduce((acc, item) => {
    return acc + item.protein;
  }, 0);
  console.log(amountProtein);

  const amountCarbohydrates = bowl.reduce((acc, item) => {
    return acc + item.carbohydrates;
  }, 0);
  console.log(amountCarbohydrates);

  const amountFat = bowl.reduce((acc, item) => {
    return acc + item.fat;
  }, 0);
  console.log(amountFat);

  const amountFiber = bowl.reduce((acc, item) => {
    return acc + item.fiber;
  }, 0);
  console.log(amountFiber);

  const amountVitaminC = bowl.reduce((acc, item) => {
    return acc + item.vitaminC;
  }, 0);
  console.log(amountVitaminC);

  const amountCalcium = bowl.reduce((acc, item) => {
    return acc + item.calcium;
  }, 0);
  console.log(amountCalcium);

  const amountPotassium = bowl.reduce((acc, item) => {
    return acc + item.pottassium;
  }, 0);
  console.log(amountPotassium);

  const amountPolyphenoles = bowl.reduce((acc, item) => {
    return acc + item.polyphenoles;
  }, 0);
  console.log(amountPolyphenoles);

  // zaznacza checkboxa
  // 1 przekazujemy sobie aktualny stan miski, 2 przekazuję również elemnt, który został już kliknięty ale jako cały object

  const getChecked = (e) => {
    console.log(e.target.value);
    setChecked(e.target.value);
  };

  // const getNoChecked = (e) => {
  //   bowl.pop(e.target.value);
  //   getNoChecked(bowl);
  // };

  // const getNoChecked = (e) => {
  // console.log(e.target.value);
  // setChecked(e.target.value);
  // };

  // const getNoChecked = (e) = {
  //   setTasks(tasks.filter(item => item !== task));
  //   console.log(e.target.value);
  // }

  // const [list, updateList] = useState(fruitNames);
  // list;

  return (
    <div>
      <h1>Make your perfect porridge</h1>
      <IngredientsList
        onChange={getChecked}
        // noChecked={getNoChecked}
        // checked={checked}
        // // // noChecked={getNoChecked}
        setBowl={setBowl}
        bowl={bowl} /* {checked ? checkedText : uncheckedText} */
      />
      <ImageIngredients bowl={bowl} />
    </div>
  );
}

export default App;
