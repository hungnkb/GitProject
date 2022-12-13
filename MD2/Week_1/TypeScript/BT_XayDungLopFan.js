var Speed;
(function (Speed) {
    Speed[Speed["slow"] = 1] = "slow";
    Speed[Speed["medium"] = 2] = "medium";
    Speed[Speed["fast"] = 3] = "fast";
})(Speed || (Speed = {}));
var Fan = /** @class */ (function () {
    function Fan() {
        this.status = false;
        this.speed = Speed.slow;
        this.radius = 5;
        this.color = "blue";
    }
    Fan.prototype.getterStatus = function () {
        return this.status;
    };
    Fan.prototype.getterSpeed = function () {
        return this.speed;
    };
    Fan.prototype.getterRadius = function () {
        return this.radius;
    };
    Fan.prototype.getterColor = function () {
        return this.color;
    };
    Fan.prototype.setterStatus = function (a) {
        this.status = a;
    };
    Fan.prototype.setterSpeed = function (a) {
        this.speed = a;
    };
    Fan.prototype.setterRadius = function (a) {
        this.radius = a;
    };
    Fan.prototype.setterColor = function (a) {
        this.color = a;
    };
    Fan.fanDefault = function () {
        return new Fan();
    };
    Fan.prototype.toString = function () {
        if (this.status == true) {
            return "Speed: " + this.speed + " - " + "Color: " + this.color + " - " + "Radius: " + this.radius + " - " + "fan is on";
        }
        else {
            return "Color: " + this.color + " - " + "Radius: " + this.radius + " - " + "fan is off";
        }
    };
    return Fan;
}());
console.log(Fan.fanDefault().toString());
