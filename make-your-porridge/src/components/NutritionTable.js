const measures = {
  calories: "kcal",
  protein: "g",
  carbohydrates: "g",
  fat: "g",
  fiber: "g",
  vitaminC: "mg",
  calcium: "mg",
  pottasium: "mg",
};

const testText = <p>test test test</p>;

const NutritionTable = ({ nutritions }) => {
  const nutritionsKeys = Object.keys(nutritions);

  return (
    <div className="container-nutrition-data">
      <h3 className="your-porridge-contains-text">your porridge contains:</h3>
      <table className="nutrition-table">
        <thead>
          <tr className="nutrition-name-section">
            {nutritionsKeys.map((nutrition, index) => {
              return (
                <th key={index} className="nutrition-name">
                  {nutrition === "vitaminC"
                    ? "Vitamin C"
                    : nutrition.charAt(0).toUpperCase() + nutrition.slice(1)}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr className="nutrition-data-section">
            {nutritionsKeys.map((nutrition, index) => {
              return (
                <td
                  key={index}
                  className="nutrition-data"
                >{`${nutritions[nutrition]} ${measures[nutrition]}`}</td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NutritionTable;
