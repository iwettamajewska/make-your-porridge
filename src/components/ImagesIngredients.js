import { images, worktopImage } from "../images/images";

const sizePortions = ["small-portion", "medium-portion", "large-portion"];

const ImageIngredients = ({ bowl }) => {
  return (
    <div className="image-container">
      <div className="worktop-conainer">
        <img src={worktopImage.worktop} className="worktop" alt="worktop" />
        <div className="oatmeal image">
          {bowl
            .filter((item) => item.id !== "oats")
            .map((item, index, options) => (
              <img
                src={
                  images[
                    `${item.id}${
                      item.options.find(
                        (op) => op.weight === +item.chosenWeight
                      )?.id
                    }`
                  ]
                }
                // src={images[item.id]}
                // src={images[`${item.id}${item.chosenWeight}`]}
                // src={images[`${item.id}${options.id}`]}
                // src={images[`${item.id}${options}`]}
                alt={item.class}
                className={item.class}
                // className= {`${item.class} ${for (let i = 0; i < 3; i++) {sizePortions}}`}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageIngredients;
