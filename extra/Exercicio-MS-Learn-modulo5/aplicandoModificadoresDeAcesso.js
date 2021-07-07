"use strict";
class Car {
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        if (doors % 2 === 0) {
            this._doors = doors;
        }
        else {
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
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    static getNumberOfCars() {
        return Car.numberOfCars;
    }
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker() {
        return this._make;
    }
}
Car.numberOfCars = 0;
class ElectricCar extends Car {
    constructor(make, color, range, doors = 2) {
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
    brake() {
        return this.worker() + ' is braking with the regenerative braking system.';
    }
}
let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors); // returns the default, 2
spark.charge();
console.log(spark.brake());
