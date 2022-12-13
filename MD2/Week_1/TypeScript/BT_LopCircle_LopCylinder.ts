class Circle {
    radius: number;
    color: string;
    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius
    }
    setRadius(radius) {
        this.radius = radius
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
    getParimeter(): number {
        return 2 * this.radius * Math.PI
    }
}

class Cylinder extends Circle {
    heigth: number;
    constructor(radius: number, color: string, heigth: number) {
        super(radius, color);
        this.heigth = heigth;
    }

    getVolume() {
        this.radius * 2 * this.heigth * Math.PI
    }
}