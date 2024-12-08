import styles from "./primitives.module.css";

export default function Box({ size = "20rem", style = {}, ...delegated }) {
  return (
    <div
      className={styles.box}
      style={{ "--size": size, ...style }}
      {...delegated}
    ></div>
  );
}
