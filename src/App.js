import React, { useState } from "react";
import "./App.css";
import Values from "values.js";
import ColorCard from "./components/ColorCard";
import InputComponent from "./components/InputComponent";

function App() {
  const [inputColor, setInputColor] = useState("");
  const [colorList, setColorList] = useState(new Values("#a0b0c0").all(10));
  const [errorAlert, setErrorAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newColorList = new Values(inputColor).all(10);
      setColorList(newColorList);
    } catch (error) {
      console.log(error);
      setErrorAlert(true);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputColor(value);
  };

  return (
    <>
      <div className="header">
        <InputComponent
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          inputColor={inputColor}
          errorAlert={errorAlert}
        />
      </div>
      <section>
        {colorList.map((item, index) => {
          return <ColorCard key={index} data={item} hexColor={item.hex} />;
        })}
      </section>
    </>
  );
}

export default App;
