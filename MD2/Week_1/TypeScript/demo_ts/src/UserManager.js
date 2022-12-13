"use strict";
exports.__esModule = true;
var User_js_1 = require("./User.js");
var readlineSync = require('readline-sync');
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    UserManager.prototype.addUser = function () {
        var name = readlineSync.question('Nhap Name: ');
        var email = readlineSync.question('Nhap Email: ');
        var phone = readlineSync.question('Nhap Phone: ');
        var gender = readlineSync.question('Nhap Gender (Male, Female, Other): ');
        var user = new User_js_1["default"](name, email, phone, gender);
        this.users.push(user);
    };
    UserManager.prototype.showList = function () {
        console.table(this.users);
    };
    UserManager.prototype.deleteUser = function () {
        var index = readlineSync.question('Nhap vi tri can xoa: ');
        this.users.splice(index, 1);
    };
    return UserManager;
}());
exports["default"] = UserManager;
