"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var EmployeeManager_1 = require("./EmployeeManager");
var employeeManager = new EmployeeManager_1.EmployeeManager();
employeeManager.addEmployee("Hưng", Employee_1.Gender.MALE, "1/1/2000", "hung@gmail.com");
