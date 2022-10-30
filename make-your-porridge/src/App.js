import "./App.css";
// import ImageIngredients from "./components/ImagesIngredients";
import IngredientsList from "./components/IngredientsList";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);

  const getChecked = (e) => {
    console.log(e.target.value);
    setChecked(e.target.value);
  };

  return (
    <div>
      <h1>Make your perfect porridge</h1>
      <IngredientsList
        onChange={getChecked} /* {checked ? checkedText : uncheckedText} */
      />
      {/* <ImageIngredients /> */}
    </div>
  );
}

export default App;
