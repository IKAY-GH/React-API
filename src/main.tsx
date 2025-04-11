import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Accueil from "./Pages/Accueil";
import Apropos from "./Pages/Apropos";
import Beers from "./Pages/Article";

const fetchbeers = async () => {
	try {
		const response = await fetch("https://api.sampleapis.com/beers/ale");
		const json = await response.json();
		return json;
	} catch (error) {
		console.error(error);
	}
};

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Accueil />,
				loader: () => {
					return fetchbeers();
				},
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
