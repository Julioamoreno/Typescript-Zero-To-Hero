interface Vehicle {
	make: string;
	color: string;
	doors: number;
	accelerate(speed: number): string;
	brake(): string;
	turn(direction: 'left' | 'right'): string;
}

class Car implements Vehicle {
	private static numberOfCars: number = 0;
	private _make: string;
	private _color: string;
	private _doors: number;

	constructor(make: string, color: string, doors = 4) {
		this._make = make;
		this._color = color;
		if (doors % 2 === 0) {
			this._doors = doors;
		} else {
			throw new Error('Doors must be an even number');
		}
		Car.numberOfCars++;
	}

	get make() {
		return this._make;
	}

	set make(make) {
		this._make = make;
	}
	get color() {
		return this._make;
	}

	set color(color) {
		this._color = color;
	}

	get doors() {
		return this._doors;
	}
	set doors(doors) {
		if (doors % 2 === 0) {
			this._doors = doors;
		} else {
			throw new Error('Doors must be an even number');
		}
	}

	public static getNumberOfCars(): number {
		return Car.numberOfCars;
	}

	accelerate(speed: number): string {
		return `${this.worker()} is accelerating to ${speed} MPH.`;
	}
	brake(): string {
		return `${this.worker()} is braking with the standard braking system.`;
	}
	turn(direction: 'left' | 'right'): string {
		return `${this.worker()} is turning ${direction}`;
	}
	// This function performs work for the other method functions
	protected worker(): string {
		return this._make;
	}
}

class ElectricCar extends Car {
	private _range: number;

	constructor(make: string, color: string, range: number, doors = 2) {
		super(make, color, doors);
		this._range = range;
	}

	get range() {
		return this._range;
	}
	set range(range) {
		this._range = range;
	}

	charge() {
		console.log(this.worker() + ' is charging.');
	}

	brake(): string {
		return this.worker() + ' is braking with the regenerative braking system.';
	}
}

let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors); // returns the default, 2
spark.charge();

console.log(spark.brake());
