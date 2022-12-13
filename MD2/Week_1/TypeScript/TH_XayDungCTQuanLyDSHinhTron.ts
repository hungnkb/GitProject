class Circle {
    color;
    radius;
    constructor(color: string, radius: number) {
        this.color = color;
        this.radius = radius;
    }
    
    }

function showCircle(circle: Circle){
    console.log("Color: " + circle.color + " - " + "Radius: " + circle.radius)
}

let circleList: Circle[] = []

circleList.push(new Circle("yellow", 10));
circleList.push(new Circle("green", 15));
circleList.push(new Circle("blue", 20));

circleList.forEach(showCircle)