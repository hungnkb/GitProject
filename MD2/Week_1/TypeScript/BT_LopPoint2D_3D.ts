class Point2D {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x
    }
    getY(): number {
        return this.y
    }
    setX(x) {
        this.x = x
    }
    setY(y) {
        this.y = y
    }
    getXY(): object {
        return {x: this.x, y: this.y}
    }
    setXY(x, y): void {
        this.x = x;
        this.y = y;
    }
}

class Point3D extends Point2D {
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }

    getZ() {
        return this.z
    }
    setZ(z: number) {
        this.z = z
    }
    getXYZ(): object {
        return {x: this.x, y: this.y, z: this.z}
    }
    set(x, y, z): void {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}