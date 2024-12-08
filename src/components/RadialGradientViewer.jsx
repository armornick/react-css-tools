import { useState } from "react";
import { Link } from "react-router";
import styles from "./RadialGradientViewer.module.css";
import { Button, ButtonGroup } from "./Button";
import Box from "./Box";

const DEFAULT_COLOR = "#FF0000";

export default function RadialGradientViewer() {
  const [colors, setColors] = useState(["#e66465", "#9198e5"]);

  const changeColor = (index, value) => {
    const nextColors = [...colors];
    nextColors[index] = value;
    setColors(nextColors);
  };

  const addColorStop = () => {
    setColors([...colors, DEFAULT_COLOR]);
  };

  const removeColorStop = () => {
    const nextColors = [...colors];
    nextColors.pop();
    setColors(nextColors);
  };

  const backgroundImage = `radial-gradient(${colors.join(", ")})`;

  return (
    <div className={styles.wrapper}>
      <Box style={{ backgroundImage }}></Box>
      <section className={styles.gradientForm}>
        <ButtonGroup className={styles.control}>
          <Button onClick={addColorStop}>Add color stop</Button>
          <Button onClick={removeColorStop}>Remove color stop</Button>
        </ButtonGroup>
        {colors.map((color, index) => (
          <div key={`color-${index}`} className={styles.control}>
            <label>{`color stop ${index + 1}`}</label>
            <input
              type="color"
              id={`color-${index}`}
              value={color}
              onChange={(e) => changeColor(index, e.target.value)}
            />
          </div>
        ))}
      </section>
      <p>
        <code>{backgroundImage}</code>
      </p>
      <p>
        <Link to="/">Back to index</Link>
      </p>
    </div>
  );
}
