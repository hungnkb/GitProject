enum Speed {
    slow = 1,
    medium = 2,
    fast = 3,
}
class Fan {
    private status: boolean = false
    private speed: number = Speed.slow
    private radius: number = 5
    private color: string = "blue"
    getterStatus() {
        return this.status
    }
    getterSpeed() {
        return this.speed
    }
    getterRadius() {
        return this.radius
    }
    getterColor() {
        return this.color
    }
    setterStatus(a) {
        this.status = a
    }
    setterSpeed(a) {
        this.speed = a
    }
    setterRadius(a) {
        this.radius = a
    }
    setterColor(a) {
        this.color = a
    }
    static fanDefault() {
        return new Fan()
    }
    toString() {

        if(this.status == true) {
    return "Speed: " + this.speed + " - " + "Color: " + this.color + " - " + "Radius: " + this.radius + " - " + "fan is on";
}
     else {
    return "Color: " + this.color + " - " + "Radius: " + this.radius + " - " + "fan is off";
}

    }
}

console.log(Fan.fanDefault().toString())

