import { css } from "@acab/ecsstatic";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router";
import { ListView, ListViewItem } from "./components/ListView";
import LinearGradientViewer from "./components/LinearGradientViewer";
import RadialGradientViewer from "./components/RadialGradientViewer";
import ConicGradientViewer from "./components/ConicGradientViewer";
import BoxShadowViewer from "./components/BoxShadowViewer";
import ClipPathTester from "./components/ClipPathTester";
import FlexboxTester from "./components/FlexboxTester";

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
			<ListView>
				<ListViewItem className={listViewItem}>
					<Link to="/linear-gradient">Linear Gradient Viewer</Link>
				</ListViewItem>
				<ListViewItem className={listViewItem}>
					<Link to="/radial-gradient">Radial Gradient Viewer</Link>
				</ListViewItem>
				<ListViewItem className={listViewItem}>
					<Link to="/conic-gradient">Conic Gradient Viewer</Link>
				</ListViewItem>
				<ListViewItem className={listViewItem}>
					<Link to="/box-shadow">Box Shadow Viewer</Link>
				</ListViewItem>
				<ListViewItem className={listViewItem}>
					<Link to="/clip-path">Clip Path Tester</Link>
				</ListViewItem>
				<ListViewItem className={listViewItem}>
					<Link to="/flexbox">Flexbox Tester</Link>
				</ListViewItem>
			</ListView>
		</nav>
	);
}

const listViewItem = css`
	padding: 0;

	a {
		color: inherit;
		text-decoration: none;
		display: block;
		padding: 1rem 2rem;
		border-radius: inherit;

		&:hover {
			background-color: hsl(0deg 0% 90%);
		}
	}
`;

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<IndexPage />} />
					<Route
						path="linear-gradient"
						element={<LinearGradientViewer />}
					/>
					<Route
						path="radial-gradient"
						element={<RadialGradientViewer />}
					/>
					<Route
						path="conic-gradient"
						element={<ConicGradientViewer />}
					/>
					<Route path="box-shadow" element={<BoxShadowViewer />} />
					<Route path="clip-path" element={<ClipPathTester />} />
					<Route path="flexbox" element={<FlexboxTester />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
