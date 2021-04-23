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
            className={errorAlert ? "red-border" : null}
            type="text"
            onChange={handleChange}
            value={inputColor}
            placeholder="#296745"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default InputComponent;
