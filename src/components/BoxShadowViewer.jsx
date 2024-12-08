import { css } from "@acab/ecsstatic";
import { useState } from "react";
import { Link } from "react-router";
import { FormWrapper, Form, FormControl } from "./FormElements";
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
    <FormWrapper>
      <Box style={{ border, boxShadow }} />
      <Form>
        <FormControl>
          <label htmlFor="inset">inset</label>
          <input
            type="checkbox"
            id="inset"
            value={inset}
            onChange={(e) => setInset(!inset)}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="shadow-color">Shadow color</label>
          <input
            type="color"
            id="shadow-color"
            value={shadowColor}
            onChange={(e) => setShadowColor(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="offset-x">horizontal offset (in pixels)</label>
          <input
            id="offset-x"
            type="number"
            value={offsetX}
            onChange={(e) => setOffsetX(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="offset-y">vertical offset (in pixels)</label>
          <input
            id="offset-y"
            type="number"
            value={offsetY}
            onChange={(e) => setOffsetY(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="blur-radius">blur radius (in pixels)</label>
          <input
            id="blur-radius"
            type="number"
            value={blurRadius}
            onChange={(e) => setBlurRadius(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="spread-radius">spread radius (in pixels)</label>
          <input
            id="spread-radius"
            type="number"
            value={spreadRadius}
            onChange={(e) => setSpreadRadius(e.target.value)}
          />
        </FormControl>
      </Form>
      <p>
        <code>box-shadow: {boxShadow};</code>
      </p>
      <p>
        <Link to="/">Back to index</Link>
      </p>
    </FormWrapper>
  );
}
