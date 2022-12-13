class Circle {
    radius: number;
    distance: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    calculate(Circle1: Circle, Circle2: Circle, distance: number): number {
        return Math.sqrt(Math.pow(Math.abs(Circle1.radius - Circle2.radius),2) + Math.pow(distance,2))
    }
}

let circle1 = new Circle(9);
let circle2 = new Circle(5);
console.log(circle1.calculate(circle1, circle2, 24))