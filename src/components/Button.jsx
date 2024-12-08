import styles from "./primitives.module.css";

export function Button({ children, className = "", ...delegated }) {
  return (
    <button className={`${styles.button} ${className}`} {...delegated}>
      {children}
    </button>
  );
}

export function ButtonGroup({ children, className = "" }) {
  return <div className={`${styles.buttonGroup} ${className}`}>{children}</div>;
}
