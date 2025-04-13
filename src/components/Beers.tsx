import type { BeersProps } from "../services/types";

function Beer({ beers }: BeersProps) {
	console.log(beers);

	const { name, price, rating, image } = beers;

	return (
		<>
			<h2>{name}</h2>
			<p>Price: {price}$</p>
			<img src={image} alt={name} />
		</>
	);
}

export default Beer;
