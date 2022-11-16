import { useState } from "react";

const NutritionTable = ({
  amountKcal,
  amountProtein,
  amountCarbohydrates,
  amountFat,
  amountFiber,
  amountVitaminC,
  amountCalcium,
  amountPotassium,
}) => {
  const nutritionNameClass = "nutrition-name";
  const nutritionDataClass = "nutrition-data";
  return (
    <div className="container-nutrition-data">
      <h3 className="your-porridge-contains-text">your porridge contains:</h3>
      <table className="nutrition-table">
        <thead>
          <tr className="nutrition-name-section">
            <th className={nutritionNameClass}>Kcal</th>
            <th className={nutritionNameClass}>Protein</th>
            <th className={nutritionNameClass}>Carbohydrates</th>
            <th className={nutritionNameClass}>Fat</th>
            <th className={nutritionNameClass}>Fiber</th>
            <th className={nutritionNameClass}>Vitamin C</th>
            <th className={nutritionNameClass}>Calcium</th>
            <th className={nutritionNameClass}>Potassium</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nutrition-data-section">
            <td className={nutritionDataClass}>{amountKcal} kcal</td>
            <td className={nutritionDataClass}>{amountProtein} g</td>
            <td className={nutritionDataClass}>{amountCarbohydrates} g</td>
            <td className={nutritionDataClass}>{amountFat} g</td>
            <td className={nutritionDataClass}>{amountFiber} g</td>
            <td className={nutritionDataClass}>{amountVitaminC} mg</td>
            <td className={nutritionDataClass}>{amountCalcium} mg</td>
            <td className={nutritionDataClass}>{amountPotassium} mg</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NutritionTable;

// import { useState } from "react";

// const NutritionTable = ({
//   amountKcal,
//   amountProtein,
//   amountCarbohydrates,
//   amountFat,
//   amountFiber,
//   amountVitaminC,
//   amountCalcium,
//   amountPotassium,
//   amountPolyphenoles,
// }) => {
// const [bowl, setBowl] = useState([]); // to jest nasza miska z owsianką
// console.log(bowl);

// const getChecked = (position) => {
//   const updatedCheckedState = checked.map((item, index) =>
//     index === position ? !item : item
//   );
// };

// setChecked(updatedCheckedState);

//   const amountKcal = bowl.reduce((acc, item) => {
//     return acc + item.kcal;
//   }, 0);
//   console.log(amountKcal);

//   const amountProtein = bowl.reduce((acc, item) => {
//     return acc + item.protein;
//   }, 0);
//   console.log(amountProtein);

//   const amountCarbohydrates = bowl.reduce((acc, item) => {
//     return acc + item.carbohydrates;
//   }, 0);
//   console.log(amountCarbohydrates);

//   const amountFat = bowl.reduce((acc, item) => {
//     return acc + item.fat;
//   }, 0);
//   console.log(amountFat);

//   const amountFiber = bowl.reduce((acc, item) => {
//     return acc + item.fiber;
//   }, 0);
//   console.log(amountFiber);

//   const amountVitaminC = bowl.reduce((acc, item) => {
//     return acc + item.vitaminC;
//   }, 0);
//   console.log(amountVitaminC);

//   const amountCalcium = bowl.reduce((acc, item) => {
//     return acc + item.calcium;
//   }, 0);
//   console.log(amountCalcium);

//   const amountPotassium = bowl.reduce((acc, item) => {
//     return acc + item.pottassium;
//   }, 0);
//   console.log(amountPotassium);

//   const amountPolyphenoles = bowl.reduce((acc, item) => {
//     return acc + item.polyphenoles;
//   }, 0);
//   console.log(amountPolyphenoles);

//   return (
//     <>
//       <span className="nutrition-data">{amountKcal}</span>
//       <span className="nutrition-data">{amountProtein}</span>
//       <span className="nutrition-data">{amountCarbohydrates}</span>
//       <span className="nutrition-data">{amountFat}</span>
//       <span className="nutrition-data">{amountFiber}</span>
//       <span className="nutrition-data">{amountVitaminC}</span>
//       <span className="nutrition-data">{amountCalcium}</span>
//       <span className="nutrition-data">{amountPotassium}</span>
//       <span className="nutrition-data">{amountPolyphenoles}</span>
//     </>
//   );
// };

// export default NutritionTable;
