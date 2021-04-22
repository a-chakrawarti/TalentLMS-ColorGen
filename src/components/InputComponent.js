import React from "react";

const InputComponent = ({
  handleSubmit,
  handleChange,
  inputColor,
  errorAlert,
}) => {
  return (
    <>
      <div className="title">
        <h2>Color Generator</h2>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            style={errorAlert ? `${{ border: "2px solid red" }}` : null}
            type="text"
            onChange={handleChange}
            value={inputColor}
            placeholder="#a0b0c0"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default InputComponent;
