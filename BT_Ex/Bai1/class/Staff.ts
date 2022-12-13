import { Employee } from "./0Employee";
import { Gender } from "./0Employee";

export class Staff extends Employee {
    task: string;

    constructor(name: string, age: number, gender: Gender, address: string, task: string) {
        super(name, age, gender, address)
        this.task = task;
    }

}