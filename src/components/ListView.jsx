import { css } from "@acab/ecsstatic";

export function ListView({ children, className = "", ...delegated }) {
  return (
    <ul className={`${listView} ${className}`} {...delegated}>
      {children}
    </ul>
  );
}

export function ListViewItem({ children, className = "", ...delegated }) {
  return (
    <li className={`${listViewItem} ${className}`} {...delegated}>
      {children}
    </li>
  );
}

const listView = css`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  max-width: max-content;
`;

const listViewItem = css`
  padding: var(--list-item-padding, 0.5rem 1rem);
  border: 1px solid hsl(0deg 0% 80%);

  &:first-child {
    border-top-left-radius: var(--list-item-radius, 16px);
    border-top-right-radius: var(--list-item-radius, 16px);
  }

  &:last-child {
    border-bottom-left-radius: var(--list-item-radius, 16px);
    border-bottom-right-radius: var(--list-item-radius, 16px);
  }
`;
