import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router";
import styles from "./App.module.css";
import LinearGradientViewer from "./components/LinearGradientViewer";
import RadialGradientViewer from "./components/RadialGradientViewer";

function Layout() {
  return (
    <main className={styles.wrapper}>
      <Outlet />
    </main>
  );
}

function IndexPage() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/linear-gradient">Linear Gradient Viewer</Link>
        </li>
        <li>
          <Link to="/radial-gradient">Radial Gradient Viewer</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="linear-gradient" element={<LinearGradientViewer />} />
          <Route path="radial-gradient" element={<RadialGradientViewer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
