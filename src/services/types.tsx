export interface BeersData {
	price: number | string;
	name: string;
	rating: { average: number; reviews: number } | null | number;
	image: string;
	id: string;
}

export interface BeersProps {
	beers: BeersData;
}
