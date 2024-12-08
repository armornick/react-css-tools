import { css } from "@acab/ecsstatic";
import { useState } from "react";
import { Link } from "react-router";
import { useColorList } from "../hooks/use-color-list";
import { Button, ButtonGroup } from "./Button";
import { FormWrapper, Form, FormControl, controlMargin } from "./FormElements";
import Box from "./Box";

const DEFAULT_COLOR = "#FF0000";

export default function LinearGradientViewer() {
  const { colors, changeColor, removeColorStop, addColorStop } =
    useColorList(DEFAULT_COLOR);
  const [useAngle, setUseAngle] = useState(false);
  const [angle, setAngle] = useState(0);

  const backgroundImage = `linear-gradient(${
    useAngle && !isNaN(angle) ? `${angle}deg, ` : ""
  }${colors.join(", ")})`;

  return (
    <FormWrapper>
      <Box style={{ backgroundImage }}></Box>
      <Form>
        <ButtonGroup className={controlMargin}>
          <Button onClick={addColorStop}>Add color stop</Button>
          <Button onClick={removeColorStop}>Remove color stop</Button>
        </ButtonGroup>
        <FormControl>
          <label htmlFor="use-angles">Use angle</label>
          <input
            type="checkbox"
            id="use-angles"
            value={useAngle}
            onChange={(e) => setUseAngle(!useAngle)}
          />
        </FormControl>
        <FormControl>
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
        </FormControl>
        {colors.map((color, index) => (
          <FormControl key={`color-${index}`}>
            <label htmlFor={`color-${index}`}>{`color stop ${
              index + 1
            }`}</label>
            <input
              type="color"
              id={`color-${index}`}
              value={color}
              onChange={(e) => changeColor(index, e.target.value)}
            />
          </FormControl>
        ))}
      </Form>
      <p>
        <code>{backgroundImage}</code>
      </p>
      <p>
        <Link to="/">Back to index</Link>
      </p>
    </FormWrapper>
  );
}
