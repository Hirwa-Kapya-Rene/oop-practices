class Car {
  private speed: number = 0;
  constructor(public brand:string) {}

  accelerate(amount: number): void {
    this.speed += amount;
    console.log(`Accelerating to ${this.speed} km/h`);
  }

}