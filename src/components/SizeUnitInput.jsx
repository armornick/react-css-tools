import { css } from "@acab/ecsstatic";
import { useEffect, useState } from "react";

const UNITS = ["px", "%", "rem"];

export default function SizeUnitInput({ update, id, ...delegated }) {
  const [value, setValue] = useState(10);
  const [unit, setUnit] = useState(UNITS[0]);

  useEffect(() => {
    update(`${value}${unit}`);
  }, [value, unit]);

  return (
    <div className={wrapper}>
      <input
        id={id}
        className={input}
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...delegated}
      />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        {UNITS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

const wrapper = css`
  display: flex;
`;

const input = css`
  flex-grow: 1;
`;
