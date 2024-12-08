import { css } from "@acab/ecsstatic";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router";
import LinearGradientViewer from "./components/LinearGradientViewer";
import RadialGradientViewer from "./components/RadialGradientViewer";
import ConicGradientViewer from "./components/ConicGradientViewer";
import BoxShadowViewer from "./components/BoxShadowViewer";

function Layout() {
  return (
    <main className={wrapper}>
      <Outlet />
    </main>
  );
}

const wrapper = css`
  max-width: 60rem;
  margin-inline: auto;
  padding: 4px 8px;
`;

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
        <li>
          <Link to="/conic-gradient">Conic Gradient Viewer</Link>
        </li>
        <li>
          <Link to="/box-shadow">Box Shadow Viewer</Link>
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
          <Route path="conic-gradient" element={<ConicGradientViewer />} />
          <Route path="box-shadow" element={<BoxShadowViewer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
