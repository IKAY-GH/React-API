import { createBrowserRouter, Link, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Accueil from "./Pages/Accueil";
import Apropos from "./Pages/Apropos";
import Beers from "./Pages/Beers";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Accueil />,
			},
			{
				path: "/Apropos",
				element: <Apropos />,
			},
			{
				path: "/Beers",
				element: <Beers />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
