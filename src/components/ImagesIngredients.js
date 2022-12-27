import { images, worktopImage } from "../images/images";

const ImageIngredients = ({ bowl }) => {
  const renderClassName = (id) => {
    if (id === 1) return "small-portion";
    if (id === 2) return "medium-portion";
    if (id === 3) return "large-portion";
  };

  return (
    <div className="image-container">
      <div className="worktop-conainer">
        <img src={worktopImage.worktop} className="worktop" alt="worktop" />
        <div className="oatmeal image">
          {bowl
            .filter((item) => item.id !== "oats")
            .map((item, index) => {
              const chosenItem = item.options.find(
                (option) => option.weight === Number(item.chosenWeight)
              );

              return (
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
                  alt={item.class}
                  className={`${item.class} ${renderClassName(chosenItem.id)}`}
                  key={index}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ImageIngredients;
