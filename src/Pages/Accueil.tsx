import { useState, useEffect } from "react";
import Beers from "../components/Beers";
import type { BeersData } from "../services/types";

function Accueil() {
	const [data, setData] = useState<BeersData[] | undefined>();

	useEffect(() => {
		fetch("https://api.sampleapis.com/beers/ale")
			.then((response) => response.json())
			.then((json) => {
				const filteredData = json.filter(
					(beer: BeersData) => Number(beer.id) >= 1 && Number(beer.id) <= 180,
				);
				setData(filteredData);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<>
			{data?.map((elem) => (
				<Beers key={elem.id} beers={elem} />
			))}
		</>
	);
}

export default Accueil;
