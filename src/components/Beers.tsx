import { BeersProps } from "../services/types";

function Beer({ beers }: BeersProps) {
	const { name, price, rating, image } = beers;

	return (
		<>
			<h1>{name}</h1>
			<p>
				{rating.average}, {rating.reviews}
			</p>
			<p>Price: {price}$</p>
			<img src={image} alt={name} />
		</>
	);
}

export default Beer;
