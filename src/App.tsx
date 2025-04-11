import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
	return (
		<>
			<body>
				<img src="./Image/8237.jpg" alt="Fond d'écran bar" />
				<header>
					<h1>Wild Beers</h1>
					Bienvenue sur notre page de séclection de bière pensées pour les
					wilders
				</header>
				<nav>
					<Link to="/">Accueil</Link>
					<Link to="/Apropos">A propos</Link>
					{/* <Link to="/Beers/1">Beer 1</Link>
					<Link to="/Beers/2">Beer 2</Link> */}
				</nav>
				<main>
					<Outlet />
				</main>
			</body>
		</>
	);
}

export default App;
