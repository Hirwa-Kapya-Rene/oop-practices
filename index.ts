class Car {
  private speed: number = 0;
  private fuel: number = 100;
  name: string = "Tesla";
  constructor(public brand:string) {}

  accelerate(amount: number): void {
    this.speed += amount;
    console.log(`Accelerating to ${this.speed} km/h`);
  }
}

const myCar = new Car("Tesla");
myCar.accelerate(50);

class ElectricCar extends Car {
  constructor(brand: string, public batteryLife: number) {
    super(brand);
  }
}
