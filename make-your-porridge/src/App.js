import "./App.css";
import ImageIngredients from "./components/ImagesIngredients";
import IngredientsList from "./components/IngredientsList";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);
  const [bowl, setBowl] = useState([]); // to jest nasza miska z owsianką
  console.log(bowl);

  const calories = bowl.reduce((acc, item) => {
    return acc + item.kcal;
  }, 0);
  console.log(calories);

  // zaznacza checkboxa
  // 1 przekazujemy sobie aktualny stan miski, 2 przekazuję również elemnt, który został już kliknięty ale jako cały object

  const getChecked = (e) => {
    console.log(e.target.value);
    setChecked(e.target.value);
  };

  return (
    <div>
      <h1>Make your perfect porridge</h1>
      <IngredientsList
        onChange={getChecked}
        setBowl={setBowl}
        bowl={bowl} /* {checked ? checkedText : uncheckedText} */
      />
      <ImageIngredients bowl={bowl} />
    </div>
  );
}

export default App;
