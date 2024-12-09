import { css } from "@acab/ecsstatic";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FormWrapper, Form, FormControl } from "./FormElements";
import Box from "./Box";
import SizeUnitInput from "./SizeUnitInput";

const CLIP_PATH_SHAPES = {
  inset: InsetFormControls,
  circle: CircleFormControls,
  ellipse: EllipseFormControls,
  //   polygon: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  rect: RectFormControls,
  xywh: XYWHFormControls,
};

export default function ClipPathTester() {
  const [shape, setShape] = useState("inset");
  const [clipPath, setClipPath] = useState("");

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
    const inset = `inset(${top} ${right} ${bottom} ${left})`;
    update(inset);
  }, [top, right, bottom, left]);

  return (
    <>
      <FormControl>
        <label htmlFor="inset-top">top</label>
        <SizeUnitInput id="inset-top" update={setTop} />
      </FormControl>
      <FormControl>
        <label htmlFor="inset-right">right</label>
        <SizeUnitInput id="inset-right" update={setRight} />
      </FormControl>
      <FormControl>
        <label htmlFor="inset-bottom">bottom</label>
        <SizeUnitInput id="inset-bottom" update={setBottom} />
      </FormControl>
      <FormControl>
        <label htmlFor="inset-left">left</label>
        <SizeUnitInput id="inset-left" update={setLeft} />
      </FormControl>
    </>
  );
}

function CircleFormControls({ update }) {
  const [radius, setRadius] = useState(50);

  useEffect(() => {
    const circle = `circle(${radius})`;
    update(circle);
  }, [radius]);

  return (
    <>
      <FormControl>
        <label htmlFor="radius">radius</label>
        <SizeUnitInput id="radius" update={setRadius} />
      </FormControl>
    </>
  );
}

function EllipseFormControls({ update }) {
  const [radiusX, setRadiusX] = useState(50);
  const [radiusY, setRadiusY] = useState(50);

  useEffect(() => {
    const ellipse = `ellipse(${radiusX} ${radiusY})`;
    update(ellipse);
  }, [radiusX, radiusY]);

  return (
    <>
      <FormControl>
        <label htmlFor="radiusx">radius (horizontal)</label>
        <SizeUnitInput id="radiusx" update={setRadiusX} />
      </FormControl>
      <FormControl>
        <label htmlFor="radiusy">radius (vertical)</label>
        <SizeUnitInput id="radiusy" update={setRadiusY} />
      </FormControl>
    </>
  );
}

function RectFormControls({ update }) {
  const [top, setTop] = useState(100);
  const [right, setRight] = useState(50);
  const [bottom, setBottom] = useState(100);
  const [left, setLeft] = useState(50);

  useEffect(() => {
    const inset = `rect(${top} ${right} ${bottom} ${left})`;
    update(inset);
  }, [top, right, bottom, left]);

  return (
    <>
      <FormControl>
        <label htmlFor="rect-top">top</label>
        <SizeUnitInput id="rect-top" update={setTop} />
      </FormControl>
      <FormControl>
        <label htmlFor="rect-right">right</label>
        <SizeUnitInput id="rect-right" update={setRight} />
      </FormControl>
      <FormControl>
        <label htmlFor="rect-bottom">bottom</label>
        <SizeUnitInput id="rect-bottom" update={setBottom} />
      </FormControl>
      <FormControl>
        <label htmlFor="rect-left">left</label>
        <SizeUnitInput id="rect-left" update={setLeft} />
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
    const xywh = `xywh(${x} ${y} ${width} ${height})`;
    update(xywh);
  }, [x, y, width, height]);

  return (
    <>
      <FormControl>
        <label htmlFor="xywh-x">horizontal position</label>
        <SizeUnitInput id="xywh-x" update={setX} />
      </FormControl>
      <FormControl>
        <label htmlFor="xywh-y">vertical position</label>
        <SizeUnitInput id="xywh-y" update={setY} />
      </FormControl>
      <FormControl>
        <label htmlFor="xywh-width">width</label>
        <SizeUnitInput id="xywh-width" update={setWidth} />
      </FormControl>
      <FormControl>
        <label htmlFor="xywh-height">height</label>
        <SizeUnitInput id="xywh-height" update={setHeight} />
      </FormControl>
    </>
  );
}
