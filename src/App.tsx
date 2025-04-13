import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
	return (
		<>
			<body>
				<header>
					<h1>Wild Beers</h1>
					<p>
						Bienvenue sur notre page de sélection de bières pensées pour les
						wilders
					</p>
				</header>
				<nav>
					<Link to="/">Accueil</Link>
					<Link to="/Apropos">A propos</Link>
				</nav>
				<main>
					<Outlet />
				</main>
			</body>
		</>
	);
}

export default App;
