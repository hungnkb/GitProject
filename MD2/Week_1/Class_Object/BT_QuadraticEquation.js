class QuadraticEquation {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getterA() {
        return this.a
    }
    getterB() {
        return this.b
    }
    getterC() {
        return this.c
    }
    getDiscriminant() {
        return this.b * this.b - 4 * this.a * this.c
    }
    getRoot1() {
        return "Nghiệm thứ nhất: " + (-this.b + Math.sqrt(this.getDiscriminant())) / 2 * this.a
    }
    getRoot2() {
        return "Nghiệm thứ 2: " + (-this.b - Math.sqrt(this.getDiscriminant())) / 2 * this.a
    }
    calculating(a, b, c) {
        if (this.getDiscriminant() > 0) {
            console.log(this.getRoot1());
            console.log(this.getRoot2());

        }
        else if (this.getDiscriminant() == 0) {
            console.log("Phương trình có nghiệm duy nhất: " + -this.b / (this.a * 2))
        }
        else {
            console.log("Phương tình vô nghiệm")
        }
    }
}

let test = new QuadraticEquation(1, 6, 1)

test.calculating()



