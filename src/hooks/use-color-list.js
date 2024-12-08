import { useState } from "react";

export function useColorList(defaultColor = "#FF0000") {
  const [colors, setColors] = useState(["#e66465", "#9198e5"]);

  const changeColor = (index, value) => {
    const nextColors = [...colors];
    nextColors[index] = value;
    setColors(nextColors);
  };

  const addColorStop = () => {
    setColors([...colors, defaultColor]);
  };

  const removeColorStop = () => {
    const nextColors = [...colors];
    nextColors.pop();
    setColors(nextColors);
  };

  return { colors, changeColor, addColorStop, removeColorStop };
}
