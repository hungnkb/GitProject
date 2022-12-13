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
    function Employee(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    Employee.prototype.getGender = function () {
        return this.gender;
    };
    Employee.prototype.getAddress = function () {
        return this.address;
    };
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    Employee.prototype.setAge = function (age) {
        this.age = age;
    };
    Employee.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Employee.prototype.setAddress = function (address) {
        this.address = address;
    };
    return Employee;
}());
exports.Employee = Employee;
