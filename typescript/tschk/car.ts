// Car.ts
import { Vehicle } from './vehicle';

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance of the Car class and initialize it
const myCar = new Car('Toyota', 'Corolla', 2021);

// Call the start method
myCar.start();
