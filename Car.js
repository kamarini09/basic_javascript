export class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }
  getCarInfo() {
    return `Hello, the cars make is ${this.make} the model is ${this.model} and the year is ${this.year}.`;
  }

  start() {
    this.isRunning = true;
    return `${this.make} ${this.model} has started `;
  }

  stop() {
    this.isRunning = false;
    return `${this.make} ${this.model} has stopped `;
  }
}
