import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
	return (
		<>
			<nav>
				<Link to="/">Accueil</Link>
				<Link to="/Apropos">A propos</Link>
				<Link to="/Beers/1">Beer 1</Link>
				<Link to="/Beers/2">Beer 2</Link>
			</nav>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
