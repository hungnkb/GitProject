import { Employee, Gender } from "./class/0Employee";
import { Engineer } from "./class/Engineer";
import { Staff } from "./class/Staff";
import { Worker } from "./class/Worker";
var readlineSync = require('readline-sync');

class Wo {
    name: string;
    age: number;
    gender: Gender;
    address: string;
}

export class EmployeeManager {
    employeeList: Employee[] = [];

    constructor(employeeList) {
        this.employeeList = employeeList
    }

    addEmployee() {
        let qName = readlineSync.question('Enter name: ')
        let qAge = readlineSync.question('Enter age: ')
        let qGender: Gender = readlineSync.question('Enter gender: ')
        let qAddress = readlineSync.question('Enter address: ')
        console.log(`
        1. Worker
        2. Engineer
        3. Office Staff
        `)
        let qKindOf = +readlineSync.question('Enter position: ')


        switch (qKindOf) {
            case 1:
                let qMajor = +readlineSync.question('Enter level: ');
                let newWorker = new Worker(qName, qAge, qGender, qAddress, qMajor);
                this.employeeList.push(newWorker);
                break;
            case 2:
                let qLevel = readlineSync.question('Enter major: ');
                let newEngineer = new Engineer(qName, qAge, qGender, qAddress, qLevel);
                this.employeeList.push(newEngineer);
                break;
            case 3:
                let qTask = readlineSync.question('Enter task: ');
                let newTask = new Staff(qName, qAge, qGender, qAddress, qTask);
                this.employeeList.push(newTask);
        }
    }


    findByFirstName() {
        let isLoop = false;
        while (isLoop == false) {
            let q = readlineSync.question('Enter name: ');
            for (let i = 0; i in this.employeeList; i++) {
                if (this.employeeList[i].name == q) {
                    return 1;
                }
                else return -1;
            }

        }
    }

    showEmployeeList() {
        console.table(this.employeeList)
    }

}