import { constantIngredient } from "./data/ingredients";

const measures = {
  calories: "kcal",
  protein: "g",
  carbohydrates: "g",
  fat: "g",
  fiber: "g",
  vitaminC: "mg",
  calcium: "mg",
  pottassium: "mg",
};

const NutritionTable = ({ nutritions }) => {
  const nutritionsKeys = Object.keys(nutritions);

  const showTable =
    JSON.stringify(nutritions) !== JSON.stringify(constantIngredient) &&
    nutritionsKeys.length !== 0;

  return (
    <div className="wrapper">
      {showTable && (
        <div className="container-nutrition-data">
          <h3 className="your-porridge-contains-text">
            your porridge contains:
          </h3>
          <table className="nutrition-table">
            <thead>
              <tr className="nutrition-name-section">
                {nutritionsKeys.slice(3, 11).map((nutrition, index) => {
                  const maxWidthClass =
                    nutrition === "pottassium" || nutrition === "carbohydrates"
                      ? "max-width-pottassium-carbohydrates"
                      : "";

                  return (
                    <th
                      key={index}
                      className={`nutrition-name ${maxWidthClass}`}
                    >
                      {nutrition === "vitaminC"
                        ? "Vitamin C"
                        : nutrition.charAt(0).toUpperCase() +
                          nutrition.slice(1)}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr className="nutrition-data-section">
                {nutritionsKeys.slice(3, 11).map((nutrition, index) => {
                  return (
                    <td
                      key={index}
                      className="nutrition-data"
                    >{`${Number.parseFloat(nutritions[nutrition]).toFixed(2)} ${
                      measures[nutrition]
                    }`}</td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NutritionTable;
