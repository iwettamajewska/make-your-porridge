import { images, worktopImage } from "../images/images";

const ImageIngredients = ({ bowl }) => {
  return (
    <div className="image-container">
      <div className="worktop-conainer">
        <img src={worktopImage.worktop} className="worktop" alt="worktop" />
        <div className="oatmeal image">
          {bowl.map((item, index, options) => (
            <img
              src={images[item.id]}
              // src={images[`${item.id}${item.chosenWeight}`]}
              // src={images[`${item.id}${options.id}`]}
              // src={images[`${item.id}${options}`]}
              className={item.class}
              alt={item.class}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageIngredients;
