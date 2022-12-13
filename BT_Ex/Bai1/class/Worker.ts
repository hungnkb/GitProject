import { Employee } from "./0Employee";
import { Gender } from "./0Employee";

export class Worker extends Employee {
    level: number;

    constructor(name: string, age: number, gender: Gender, address: string, level: number) {
        super(name, age, gender, address)
        this.level = level;
    }

}