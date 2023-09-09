import React from "react";
import { getRandomColor } from "./randomColorGenerator"; // Import the getRandomColor function

function Child({ color, onChangeColor }) {
  const handleClick = () => {
    const newColor = getRandomColor(); // Use getRandomColor function to generate a random color
    onChangeColor(newColor);
  };

  return (
    <div
      onClick={handleClick}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;
