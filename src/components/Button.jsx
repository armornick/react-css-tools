import { css } from "@acab/ecsstatic";

export function Button({ children, className = "", ...delegated }) {
  return (
    <button className={`${button} ${className}`} {...delegated}>
      {children}
    </button>
  );
}

const button = css`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: transparent;
  color: white;
  background-color: var(--button-bg-color, hsl(224, 85%, 50%));

  &:hover {
    background-color: var(--button-hover-bg-color, hsl(224, 85%, 40%));
  }
`;

export function ButtonGroup({ children, className = "" }) {
  return <div className={`${buttonGroup} ${className}`}>{children}</div>;
}

const buttonGroup = css`
  display: flex;
  gap: 0.5em;
`;
