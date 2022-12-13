class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    distance(b) {
        return Math.abs(Math.sqrt((this.x-b.x)*(this.x-b.x) + (this.y-b.y)*(this.y-b.y)))
    }
}

let Point1 = new Point(1,2);
let Point2 = new Point(5,6);
console.log(Point1.distance(Point2))