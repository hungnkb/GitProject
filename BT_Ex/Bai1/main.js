"use strict";
exports.__esModule = true;
var EmployeeManager_1 = require("./EmployeeManager");
var readlineSync = require('readline-sync');
var manager1 = new EmployeeManager_1.EmployeeManager([]);
var isLoop1 = true;
while (isLoop1) {
    console.log("\n1. Create new employee\n2. Find employee by name\n3. Display employee list\n4. Exit\n");
    var q = +readlineSync.question('Enter your choice: ');
    switch (q) {
        case 1:
            var isLoop = true;
            while (isLoop) {
                manager1.addEmployee();
                var qLoop = readlineSync.question('Do you want to add more? [Y/N] ');
                if (qLoop == 'N') {
                    isLoop = false;
                }
                // break;
            }
            break;
        case 2:
            manager1.findByFirstName();
            break;
        case 3:
            manager1.showEmployeeList();
            break;
        case 4:
            isLoop1 = false;
            break;
    }
}
