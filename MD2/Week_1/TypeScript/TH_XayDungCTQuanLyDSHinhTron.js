var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    return Circle;
}());
function showCircle(circle) {
    console.log("Color: " + circle.color + " - " + "Radius: " + circle.radius);
}
var circleList = [];
circleList.push(new Circle("yellow", 10));
circleList.push(new Circle("green", 15));
circleList.push(new Circle("blue", 20));
circleList.forEach(showCircle);
