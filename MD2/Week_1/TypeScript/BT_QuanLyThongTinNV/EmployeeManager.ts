import { Employee } from "./Employee.js";
import {Gender} from "./Employee.js"
export class EmployeeManager {
    constructor() {

    }
    employeeList: any = [];

    addEmployee(name: string, gender: Gender, birth: string, email: string, phoneNumber?): void {
        let employee: Employee = new Employee(name, gender, birth, phoneNumber)
        this.employeeList.push(employee)
    }
    deleteEmployee(index) {
        this.employeeList.splice(index,1)
    }
}
