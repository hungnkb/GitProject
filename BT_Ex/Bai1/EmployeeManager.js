"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var Engineer_1 = require("./class/Engineer");
var Staff_1 = require("./class/Staff");
var Worker_1 = require("./class/Worker");
var readlineSync = require('readline-sync');
var Wo = /** @class */ (function () {
    function Wo() {
    }
    return Wo;
}());
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager(employeeList) {
        this.employeeList = [];
        this.employeeList = employeeList;
    }
    EmployeeManager.prototype.addEmployee = function () {
        var qName = readlineSync.question('Enter name: ');
        var qAge = readlineSync.question('Enter age: ');
        var qGender = readlineSync.question('Enter gender: ');
        var qAddress = readlineSync.question('Enter address: ');
        console.log("\n        1. Worker\n        2. Engineer\n        3. Office Staff\n        ");
        var qKindOf = +readlineSync.question('Enter position: ');
        switch (qKindOf) {
            case 1:
                var qMajor = +readlineSync.question('Enter level: ');
                var newWorker = new Worker_1.Worker(qName, qAge, qGender, qAddress, qMajor);
                this.employeeList.push(newWorker);
                break;
            case 2:
                var qLevel = readlineSync.question('Enter major: ');
                var newEngineer = new Engineer_1.Engineer(qName, qAge, qGender, qAddress, qLevel);
                this.employeeList.push(newEngineer);
                break;
            case 3:
                var qTask = readlineSync.question('Enter task: ');
                var newTask = new Staff_1.Staff(qName, qAge, qGender, qAddress, qTask);
                this.employeeList.push(newTask);
        }
    };
    EmployeeManager.prototype.findByFirstName = function () {
        var isLoop = false;
        while (isLoop == false) {
            var q = readlineSync.question('Enter name: ');
            for (var i = 0; i in this.employeeList; i++) {
                if (this.employeeList[i].name == q) {
                    return 1;
                }
                else
                    return -1;
            }
        }
    };
    EmployeeManager.prototype.showEmployeeList = function () {
        console.table(this.employeeList);
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
