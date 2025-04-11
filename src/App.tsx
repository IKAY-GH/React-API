import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
	return (
		<>
			<nav>
				<Link to="/">Accueil</Link>
				<Link to="/Apropos">A propos</Link>
			</nav>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
