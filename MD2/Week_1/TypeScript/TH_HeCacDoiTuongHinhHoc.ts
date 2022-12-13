class Shape {
    color: string;
    filled: boolean;
    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }

    getColor() {
        return this.color
    }
    getFilled() {
        return this.filled
    }
    setColor(color) {
        this.color = color
    }
    setFilled(filled) {
        this.filled = filled
    }
    toString(): string {
        return "A Shape with color of " + this.color + " and " + this.getFilled()? "filled" : "not filled"
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number, color: string, filled: boolean) {
        super(color, filled)
        this.radius = radius;
    }

    getRadius() {
        return this.radius
    }
    setRadius(radius) {
        this.radius = radius
    }
    getArea() {
        return Math.pow(this.radius, 2) * Math.PI
    }
    getPerimeter() {
        return 2 * this.radius * Math.PI
    }
    toString(): string {
        return "A Circle with radius = " + this.radius + ", which is a subclass of " + super.toString()
    }
}

class Rectangle extends Shape {
    width: number;
    length: number;
    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    getWidth() {
        return this.width
    }
    getLength() {
        return this.length
    }
    setWidth(width) {
        this.width = width
    }
    setLength(length) {
        this.length = length
    }
    getArea() {
        return this.width * this.length
    }
    getPerimeter() {
        return (this.width + this.length) * 2
    }
    toString(): string {
        return "A Rectangle with width=" + this.width + " and length=" + this.length + ", which is a subclass of " + super.toString()
    }
}

class Square extends Shape {
    side: number;
    constructor(color: string, filled: boolean, side: number) {
        super(color, filled);
        this.side = side;
    }
    getSide() {
        return this.side
    }
    setSide(side) {
        this.side = side
    }
    setWidth(side) {
        this.setSide(side)
    }
    setLength(side) {
        this.setSide(side)
    }
    tostring(): string {
        return "A square with side=" + this.side + ", which is a subclass of " + super.toString()
    }
}