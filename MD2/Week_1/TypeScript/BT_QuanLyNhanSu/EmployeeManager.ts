import { Employee } from "./Employee";

class EmployeeManager {
    constructor() {

    }
    static employeeList: Employee[] = [];

    display() {
        return EmployeeManager.employeeList;
    }
    add(employee) {
        EmployeeManager.employeeList.push(employee)
    }
    infoEmployee(employee) {
        return employee
    }
    delete(index: number) {
        EmployeeManager.employeeList.splice(index, 1)
    }
    edit(index, firstName) {
        EmployeeManager.employeeList[index].firstName = firstName
    }
}