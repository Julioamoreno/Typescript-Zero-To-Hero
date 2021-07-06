interface IceCream {
	flavor: string;
	scoops: number;
}

interface Sundae extends IceCream {
	sauce: 'chocolate' | 'caramel' | 'strawberry';
	nuts?: boolean;
	whippedCream?: boolean;
	instruction?: boolean;
}

let iceCream: IceCream = {
	flavor: 'baunilha',
	scoops: 5,
};

let myIceCream: Sundae = {
	sauce: 'caramel',
	flavor: 'vanilla',
	scoops: 2,
};

function tooManyScoops(dessert: IceCream) {
	if (dessert.scoops >= 4) {
		return dessert.scoops + 'is too many scoops';
	}
	return 'Your order will be ready soon!';
}
