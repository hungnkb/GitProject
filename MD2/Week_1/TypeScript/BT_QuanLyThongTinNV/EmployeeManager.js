"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var Employee_js_1 = require("./Employee.js");
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.employeeList = [];
    }
    EmployeeManager.prototype.addEmployee = function (name, gender, birth, email, phoneNumber) {
        var employee = new Employee_js_1.Employee(name, gender, birth, phoneNumber);
        this.employeeList.push(employee);
    };
    EmployeeManager.prototype.deleteEmployee = function (index) {
        this.employeeList.splice(index, 1);
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
