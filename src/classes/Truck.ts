import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';


class Truck extends Vehicle implements AbleToTow {


vin: string;
color: string;
make: string;
model: string;
year: number;
weight: number;
topSpeed: number;
wheels: Wheel[];
towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;


     if (wheels.length !== 4) {
      this.wheels = [
        new Wheel(),
        new Wheel(),
        new Wheel(),
        new Wheel(),
      ];
    } else {
      this.wheels = wheels;
    }
  }


  tow(vehicle: Truck | Motorbike | Car): void {

    if (vehicle.weight <= this.towingCapacity) {
      
    console.log(`Truck ${this.make} ${this.model} is towing a ${vehicle.make} ${vehicle.model}.`);
    } 

    else {
      console.log(`The ${vehicle.make} ${vehicle.model} is too heavy to be towed by the Truck.`);
    }
  }

  override printDetails(): void {

    super.printDetails();

    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.length} wheels`);
  }
}

export default Truck;
