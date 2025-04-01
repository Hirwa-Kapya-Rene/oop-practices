var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
        this.speed = 0;
    }
    Car.prototype.accelerate = function (amount) {
        this.speed += amount;
        console.log("Accelerating to ".concat(this.speed, " km/h"));
    };
    return Car;
}());
