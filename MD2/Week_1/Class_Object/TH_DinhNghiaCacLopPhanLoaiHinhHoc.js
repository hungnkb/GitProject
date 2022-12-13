class Shape {
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    setValue() {

    }
}
class Circle {
    constructor(color, filled, radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.adius * Math.PI
    }
    getPerimeter() {
        return this.radius * 2 * Math.PI
    }
}
class Rectangle {
    constructor(color, filled, width, length) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    getArea() {
        return this.width * this.length
    }
    getPerimeter() {
        return (this.width + this.length) * 2
    }
}
class Square {
    constructor(color, filled, side = 1) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
}

let shape = new Shape("red", false);


console.log(shape);


let circle = new Circle(3.5, "indigo", false);


console.log(circle);


let rectangle = new Rectangle(2.5, 3.8, "orange", true);


console.log(rectangle);


let square = new Square("yellow", true);


console.log(square);