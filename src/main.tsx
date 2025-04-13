import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Accueil from "./Pages/Accueil";
import Apropos from "./Pages/Apropos";
import type { BeersData } from "./services/types";

// import Beers from "./Pages/Article";

const fetchbeers = async () => {
	try {
		const response = await fetch("https://api.sampleapis.com/beers/ale");
		const data: BeersData[] = await response.json();
		const limitedBeers = data.filter(
			(beers) => beers.id >= 1 && beers.id <= 180,
		);
		return limitedBeers;
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
			// {
			// 	path: "/Beers",
			// 	element: <Beers />,
			// },
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
