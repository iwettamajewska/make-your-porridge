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
  return (
    <div>
      <p>your porridge contains:</p>
      <div className="nutrition-name">
        <span className="nutrition-data">Kcal</span>
        <span className="nutrition-data">Protein</span>
        <span className="nutrition-data">Carbohydrates</span>
        <span className="nutrition-data">Fat</span>
        <span className="nutrition-data">Fiber</span>
        <span className="nutrition-data">VitaminC</span>
        <spa className="nutrition-data">Calcium</spa>
        <span className="nutrition-data">Potassium</span>
      </div>
      <span className="nutrition-data">{amountKcal} kcal</span>
      <span className="nutrition-data">{amountProtein} g</span>
      <span className="nutrition-data">{amountCarbohydrates} g</span>
      <span className="nutrition-data">{amountFat} g</span>
      <span className="nutrition-data">{amountFiber} g</span>
      <span className="nutrition-data">{amountVitaminC} mg</span>
      <span className="nutrition-data">{amountCalcium} mg</span>
      <span className="nutrition-data">{amountPotassium} mg</span>
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
