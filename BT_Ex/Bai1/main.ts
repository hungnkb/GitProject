import { EmployeeManager } from "./EmployeeManager";
var readlineSync = require('readline-sync');

let manager1 = new EmployeeManager([])




let isLoop = true;
while (isLoop) {
    console.log(`
1. Create new employee
2. Find employee by name
3. Display employee list
4. Exit
`)
    let q = +readlineSync.question('Enter your choice: ')
    switch (q) {
        case 1:
            let isLoop = true;
            while (isLoop) {
                manager1.addEmployee();
                let qLoop = readlineSync.question('Do you want to add more? [Y/N] ')
                if (qLoop == 'N') {
                    isLoop = false;
                }
            }
            break;
        case 2:
            manager1.findByFirstName();
            break;
        case 3:
            manager1.showEmployeeList();
            break;
        case 4:
            isLoop = false;
            break;
    }
}