class Shape {
    name: string;
    color: string;
    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }
}

class Triangle extends Shape {
    side1: number;
    side2: number;
    side3: number;
    constructor(side1: number, side2: number, side3: number, name: string, color: string) {
        super(name, color)
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    setSide(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getSide1() {
        return this.side1
    }
    getSide2() {
        return this.side2
    }
    getSide3() {
        return this.side3
    }

    getPerimeter(): number {
        return this.side1 + this.side2 + this.side3
    }
    getArea(): number {
        let a = this.getPerimeter()
        return Math.sqrt(a * (a - this.side1) * (a - this.side2) * (a - this.side3))
    }
}