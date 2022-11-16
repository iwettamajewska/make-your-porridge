import { images, oatmealImage, worktopImage } from "../images/images";

const ImageIngredients = ({ bowl }) => {
  return (
    <div className="image-container">
      <div className="worktop-conainer">
        <img src={worktopImage.worktop} className="worktop" alt="worktop" />
      </div>
      <img
        src={oatmealImage.oatmeal}
        className="oatmeal image relative correct-oatmeal"
        alt="oatmeal"
      />

      {bowl.map((item, index) => (
        <img
          src={images[item.name]}
          // className={images.className}
          // alt={images[item.alt]}
          className={[item.class + " image" + " absolute"]}
          alt={item.class}
          // className="cow-milk image"
          // alt="cow-milk"
          key={index}
          // className={[item.class + " image"]} <-- tu coś nie tak jest
          // alt={[item.class]}
        />
      ))}
    </div>
  );
};

export default ImageIngredients;

{
  /* <img
        src={images.yoghurt}
        className="strawberries image"
        alt="strawberries"
      />
      <img src={images.cowMilk} className="cow-milk image" alt="cow-milk" />
      <img src={images.riceMilk} className="rice-milk image" alt="rice-milk" />
      <img src={images.banana} className="banana image" alt="banana" />
      <img src={images.apple} className="apple image" alt="apple" />
      <img
        src={images.strawberries}
        className="strawberries image"
        alt="strawberries"
      />
      <img
        src={images.blueberries}
        className="blueberries image"
        alt="blueberries"
      />
      <img
        src={images.raspberries}
        className="raspberries image"
        alt="raspberries"
      />
      <img src={images.walnut} className="walnut image" alt="walnut" />
      <img src={images.cashew} className="cashew image" alt="cashew" />
      <img
        src={images.chiaSeeds}
        className="chia-seeds image"
        alt="chiaSeeds"
      /> */
}
{
  /* <img
            src={oatmealImage[item.name]}
            className={[item.class + " image"]}
            alt={item.class}
            key={index}
          /> */
}
