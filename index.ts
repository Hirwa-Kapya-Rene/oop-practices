class Car {
  private speed: number = 0;
  constructor(public brand:string) {}

  accelerate(amount: number): void {
    this.speed += amount;
    console.log(`Accelerating to ${this.speed} km/h`);
  }
}

class ElectricCar extends Car {
  private batteryLevel: number = 100;

  constructor(brand: string, private batteryCapacity: number) {
    super(brand);
  }

  charge(amount: number): void {
    this.batteryLevel = Math.min(this.batteryLevel + amount, this.batteryCapacity);
    console.log(`Charging to ${this.batteryLevel}%`);
  }
}