"use strict";
exports.__esModule = true;
exports.Employee = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHERS"] = 2] = "OTHERS";
})(Gender = exports.Gender || (exports.Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(name, gender, birth, email, phoneNumber) {
        this.name = name;
        this.gender = gender;
        this.birth = birth;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    Employee.prototype.showEmployeeInfo = function (employee) {
        return employee;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    Employee.prototype.getGender = function () {
        return this.gender;
    };
    Employee.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Employee.prototype.getBirth = function () {
        return this.birth;
    };
    Employee.prototype.setBirth = function (birth) {
        this.birth = birth;
    };
    Employee.prototype.getEmail = function () {
        return this.email;
    };
    Employee.prototype.setEmail = function (email) {
        this.email = email;
    };
    Employee.prototype.getPhoneNumber = function (number) {
        return this.phoneNumber;
    };
    Employee.prototype.setPhoneNumber = function (number) {
        this.phoneNumber = number;
    };
    Employee.prototype.addEmployee = function (name, gender, birth, email, phoneNumber) {
        var user = new Employee(name, gender, birth, email, phoneNumber);
        return user;
    };
    return Employee;
}());
exports.Employee = Employee;
