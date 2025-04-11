import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
	return (
		<>
			<nav>
				<Link to="/">Accueil</Link>
				<Link to="/Apropos">A propos</Link>
				<Link to="/Article/1">Article 1</Link>
				<Link to="/Article/2">Article 2</Link>
			</nav>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
