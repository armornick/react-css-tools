import { css } from "@acab/ecsstatic";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FormWrapper, Form, FormControl } from "./FormElements";
import Box from "./Box";

const CLIP_PATH_SHAPES = {
  inset: InsetFormControls,
  circle: CircleFormControls,
  ellipse: EllipseFormControls,
  //   polygon: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  //   rect: RectFormControls,
  xywh: XYWHFormControls,
};

export default function ClipPathTester() {
  const [shape, setShape] = useState("inset");
  const [clipPath, setClipPath] = useState("inset(100px 50px)");

  const FormControls = CLIP_PATH_SHAPES[shape];
  const backgroundColor = "rebeccapurple";
  //   const clipPath = CLIP_PATH_SHAPES[shape];

  return (
    <FormWrapper>
      <Box style={{ backgroundColor, clipPath }} />
      <Form>
        <FormControl>
          <label htmlFor="shape">shape</label>
          <select
            id="shape"
            value={shape}
            onChange={(e) => setShape(e.target.value)}
          >
            {Object.keys(CLIP_PATH_SHAPES).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormControl>
        <FormControls update={setClipPath} />
      </Form>
      <p>
        <code>clip-path: {clipPath};</code>
      </p>
      <p>
        <Link to="/">Back to index</Link>
      </p>
    </FormWrapper>
  );
}

function InsetFormControls({ update }) {
  const [top, setTop] = useState(100);
  const [right, setRight] = useState(50);
  const [bottom, setBottom] = useState(100);
  const [left, setLeft] = useState(50);

  useEffect(() => {
    const inset = `inset(${top}px ${right}px ${bottom}px ${left}px)`;
    update(inset);
  }, [top, right, bottom, left]);

  return (
    <>
      <FormControl>
        <label htmlFor="inset-top">top</label>
        <input
          id="inset-top"
          type="number"
          value={top}
          onChange={(e) => setTop(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="inset-right">right</label>
        <input
          id="inset-right"
          type="number"
          value={right}
          onChange={(e) => setRight(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="inset-bottom">bottom</label>
        <input
          id="inset-bottom"
          type="number"
          value={bottom}
          onChange={(e) => setBottom(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="inset-left">left</label>
        <input
          id="inset-left"
          type="number"
          value={left}
          onChange={(e) => setLeft(e.target.value)}
        />
      </FormControl>
    </>
  );
}

function CircleFormControls({ update }) {
  const [radius, setRadius] = useState(50);

  useEffect(() => {
    const circle = `circle(${radius}px)`;
    update(circle);
  }, [radius]);

  return (
    <>
      <FormControl>
        <label htmlFor="radius">radius</label>
        <input
          id="radius"
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        />
      </FormControl>
    </>
  );
}

function EllipseFormControls({ update }) {
  const [radiusX, setRadiusX] = useState(50);
  const [radiusY, setRadiusY] = useState(50);

  useEffect(() => {
    const ellipse = `ellipse(${radiusX}px ${radiusY}px)`;
    update(ellipse);
  }, [radiusX, radiusY]);

  return (
    <>
      <FormControl>
        <label htmlFor="radiusx">radius (horizontal)</label>
        <input
          id="radiusx"
          type="number"
          value={radiusX}
          onChange={(e) => setRadiusX(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="radiusy">radius (vertical)</label>
        <input
          id="radiusy"
          type="number"
          value={radiusY}
          onChange={(e) => setRadiusY(e.target.value)}
        />
      </FormControl>
    </>
  );
}

function XYWHFormControls({ update }) {
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(50);

  useEffect(() => {
    const xywh = `xywh(${x}px ${y}px ${width}px ${height}px)`;
    update(xywh);
  }, [x, y, width, height]);

  return (
    <>
      <FormControl>
        <label htmlFor="xywh-x">horizontal position</label>
        <input
          id="xywh-x"
          type="number"
          value={x}
          onChange={(e) => setX(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="xywh-y">vertical position</label>
        <input
          id="xywh-y"
          type="number"
          value={y}
          onChange={(e) => setY(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="xywh-width">width</label>
        <input
          id="xywh-width"
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="xywh-height">height</label>
        <input
          id="xywh-height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </FormControl>
    </>
  );
}
