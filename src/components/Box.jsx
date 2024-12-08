import { css } from "@acab/ecsstatic";

export default function Box({ size = "20rem", style = {}, ...delegated }) {
  return (
    <div
      className={box}
      style={{ "--size": size, ...style }}
      {...delegated}
    ></div>
  );
}

const box = css`
  width: var(--size);
  height: var(--size);
  margin-bottom: 2rem;
`;
