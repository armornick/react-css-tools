import { css } from "@acab/ecsstatic";
import { useState } from "react";
import { Link } from "react-router";
import { useColorList } from "../hooks/use-color-list";
import { Button, ButtonGroup } from "./Button";
import Box from "./Box";

const DEFAULT_COLOR = "#FF0000";

export default function ConicGradientViewer() {
  const { colors, changeColor, removeColorStop, addColorStop } =
    useColorList(DEFAULT_COLOR);
  const [useAngle, setUseAngle] = useState(false);
  const [angle, setAngle] = useState(0);

  const backgroundImage = `conic-gradient(${
    useAngle && !isNaN(angle) ? `from ${angle}deg, ` : ""
  }${colors.join(", ")})`;

  return (
    <div className={wrapper}>
      <Box style={{ backgroundImage }}></Box>
      <section className={gradientForm}>
        <ButtonGroup className={control}>
          <Button onClick={addColorStop}>Add color stop</Button>
          <Button onClick={removeColorStop}>Remove color stop</Button>
        </ButtonGroup>
        <label className={control} htmlFor="use-angles">
          Use angle
          <input
            type="checkbox"
            id="use-angles"
            value={useAngle}
            onChange={(e) => setUseAngle(!useAngle)}
          />
        </label>
        <div className={control}>
          <label htmlFor="angle">Angle</label>
          <input
            type="number"
            id="angle"
            disabled={!useAngle}
            min={0}
            max={360}
            value={angle}
            onChange={(e) => setAngle(parseInt(e.target.value))}
          />
        </div>
        {colors.map((color, index) => (
          <div key={`color-${index}`} className={control}>
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

const wrapper = css`
  @media (min-width: 50rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const gradientForm = css`
  padding-block: 3rem;

  label {
    margin-right: 1rem;
  }
`;

const control = css`
  margin-bottom: 0.5rem;
`;
