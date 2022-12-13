import { Employee } from "./0Employee";
import { Gender } from "./0Employee";

export class Engineer extends Employee {
    major: string;

    constructor(name: string, age: number, gender: Gender, address: string, major: string) {
        super(name, age, gender, address)
        this.major = major;
    }

}