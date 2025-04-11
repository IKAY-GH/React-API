export interface BeersData {
	price: number;
	name: string;
	rating: { average: number; reviews: number };
	image: string;
	id: string;
}

export interface BeersProps {
	beers: BeersData;
}
