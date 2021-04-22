import React, { useEffect, useState } from "react";

const ColorCard = ({ data, hexColor }) => {
  const { rgb, type, weight } = data;
  const [copyAlert, setCopyAlert] = useState(false);

  const backgroundRGB = rgb.join(",");
  const hexValue = `#${hexColor}`;

  const copyClipboard = () => {
    setCopyAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopyAlert(false);
    }, 2000);
    return () => {
      clearInterval(timeout);
    };
  }, [copyAlert]);

  return (
    <>
      <div
        onClick={copyClipboard}
        className={`base ${type === "shade" ? "tint" : null}`}
        style={{ backgroundColor: `rgb(${backgroundRGB})` }}>
        <p>{weight}%</p>
        <p>{hexValue}</p>
        {copyAlert ? (
          <span className="clipboard-text">
            <p>Copied to Clipboard</p>
          </span>
        ) : null}
      </div>
    </>
  );
};

export default ColorCard;
