import { useState } from "react";

function ColorToggle() {
  const [color, setColor] = useState("red");

  function changeColor() {
    setColor(color === "red" ? "green" : "red");
  }

  return (
    <h2
      onClick={changeColor}
      style={{ color: color }}
    >
      Click Me
    </h2>
  );
}

export default ColorToggle;
