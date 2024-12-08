// import { useState } from "react";
import styles from "./App.module.css";
// import LinearGradientViewer from "./components/LinearGradientViewer";
import RadialGradientViewer from "./components/RadialGradientViewer";

function App() {
  return (
    <main className={styles.wrapper}>
      <RadialGradientViewer />
    </main>
  );
}

export default App;
