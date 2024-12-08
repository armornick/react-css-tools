import { useState } from "react";
import { Button, ButtonGroup } from "./Button";
import styles from "./LinearGradientViewer.module.css";

const DEFAULT_COLOR = "#FF0000";

export default function LinearGradientViewer() {
  const [colors, setColors] = useState(["#e66465", "#9198e5"]);
  const [useAngle, setUseAngle] = useState(false);
  const [angle, setAngle] = useState(0);

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

  const backgroundImage = `linear-gradient(${
    useAngle && !isNaN(angle) ? `${angle}deg, ` : ""
  }${colors.join(", ")})`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.box} style={{ backgroundImage }}></div>
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
        <label className={styles.control} htmlFor="use-angles">
          Use angle
          <input
            type="checkbox"
            id="use-angles"
            value={String(useAngle)}
            onChange={(e) => setUseAngle(Boolean(e.target.value))}
          />
        </label>
        <div className={styles.control}>
          <label htmlFor="angle">Angle</label>
          <input
            type="number"
            id="angle"
            min={0}
            max={360}
            value={angle}
            onChange={(e) => setAngle(parseInt(e.target.value))}
          />
        </div>
      </section>
      <p>
        <code>{backgroundImage}</code>
      </p>
    </div>
  );
}
