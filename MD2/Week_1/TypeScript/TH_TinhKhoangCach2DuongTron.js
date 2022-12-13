var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculate = function (Circle1, Circle2, distance) {
        return Math.sqrt(Math.pow(Math.abs(Circle1.radius - Circle2.radius), 2) + Math.pow(distance, 2));
    };
    return Circle;
}());
var circle1 = new Circle(9);
var circle2 = new Circle(5);
console.log(circle1.calculate(circle1, circle2, 24));
