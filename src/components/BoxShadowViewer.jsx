import { css } from "@acab/ecsstatic";
import { useState } from "react";
import { Link } from "react-router";
import Box from "./Box";

export default function BoxShadowViewer() {
  const [inset, setInset] = useState(false);
  const [offsetX, setOffsetX] = useState(10);
  const [offsetY, setOffsetY] = useState(5);
  const [blurRadius, setBlurRadius] = useState(5);
  const [spreadRadius, setSpreadRadius] = useState(5);
  const [shadowColor, setShadowColor] = useState("#111111");

  const border = "1px solid black"; // to make box more visible
  const boxShadow = `${
    inset ? "inset" : ""
  } ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`;

  return (
    <div className={wrapper}>
      <Box style={{ border, boxShadow }} />
      <form className={form}>
        <div className={control}>
          <label htmlFor="inset">inset</label>
          <input
            type="checkbox"
            id="inset"
            value={inset}
            onChange={(e) => setInset(!inset)}
          />
        </div>
        <div className={control}>
          <label htmlFor="shadow-color">Shadow color</label>
          <input
            type="color"
            id="shadow-color"
            value={shadowColor}
            onChange={(e) => setShadowColor(e.target.value)}
          />
        </div>
        <div className={control}>
          <label htmlFor="offset-x">horizontal offset (in pixels)</label>
          <input
            type="text"
            pattern="-?\d+"
            id="offset-x"
            value={offsetX}
            onChange={(e) => setOffsetX(e.target.value)}
          />
        </div>
        <div className={control}>
          <label htmlFor="offset-y">vertical offset (in pixels)</label>
          <input
            type="text"
            pattern="-?\d+"
            id="offset-y"
            value={offsetY}
            onChange={(e) => setOffsetY(e.target.value)}
          />
        </div>
        <div className={control}>
          <label htmlFor="blur-radius">blur radius (in pixels)</label>
          <input
            type="text"
            pattern="-?\d+"
            id="blur-radius"
            value={blurRadius}
            onChange={(e) => setBlurRadius(e.target.value)}
          />
        </div>
        <div className={control}>
          <label htmlFor="spread-radius">spread radius (in pixels)</label>
          <input
            type="text"
            pattern="-?\d+"
            id="spread-radius"
            value={spreadRadius}
            onChange={(e) => setSpreadRadius(e.target.value)}
          />
        </div>
      </form>
      <p>
        <code>box-shadow: {boxShadow};</code>
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

const form = css`
  padding-block: 3rem;
`;

const control = css`
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
