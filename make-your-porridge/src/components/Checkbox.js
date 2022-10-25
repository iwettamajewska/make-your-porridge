import React from "react";

const Checkbox = ({ value, onChange }) => {
  return (
    <>
      <p>choose ingredients</p>
      <form className="food-select">
        <input
          className="option"
          name="yoghurt"
          type="checkbox"
          value="yoghurt"
          checked={value}
          onChange={onChange}
        />
        <label HTMLfor="yoghurt">yoghurt</label>

        <input
          className="option"
          name="cow milk"
          type="checkbox"
          value="cow milk"
          checked={value}
          onChange={onChange}
        />
        <label HTMLfor="cow milk">cow milk</label>
        <input
          className="option"
          name="rice milk"
          type="checkbox"
          value="rice milk"
          checked={value}
          onChange={onChange}
        />
        <label HTMLfor="rice milk">rice milk</label>
        <input
          className="option"
          name="banana"
          type="checkbox"
          value="banana"
          checked={value}
          onChange={onChange}
        />
        <label HTMLfor="banana">banana</label>
        <input
          className="option"
          name="apple"
          type="checkbox"
          value="apple"
          checked={value}
          onChange={onChange}
        />
        <label HTMLfor="apple">apple</label>
        <input
          className="option"
          name="orange"
          type="checkbox"
          value="orange"
          checked={value}
          onChange={onChange}
        />
        <label HTMLfor="orange">orange</label>
        <input
          className="option"
          name="strawberries"
          type="checkbox"
          value="strawberries"
          checked={value}
          onChange={onChange}
        />
        <label HTMLfor="strawberries">strawberries</label>
        <input
          className="option"
          name="blueberries"
          type="checkbox"
          value="blueberries"
          checked={value}
          onChange={onChange}
        />
        <label HTMLfor="blueberries">blueberries</label>
        <input
          className="option"
          name="raspberries"
          type="checkbox"
          value="raspberries"
          checked={value}
          onChange={onChange}
        />
        <label HTMLfor="raspberries">raspberries</label>
        <input
          className="option"
          name="walnut"
          type="checkbox"
          value="walnut"
          checked={value}
          onChange={onChange}
        />
        <label HTMLfor="walnut">walnut</label>
        <input
          className="option"
          name="cashew"
          type="checkbox"
          value="cashew"
          checked={value}
          onChange={onChange}
        />
        <label HTMLfor="cashew">cashew</label>
        <input
          className="option"
          name="chia seeds"
          type="checkbox"
          value="chia seeds"
          checked={value}
          onChange={onChange}
        />
        <label HTMLfor="chia seeds">chia seeds</label>
      </form>
    </>
  );
};

export default Checkbox;
