"use strict";
exports.__esModule = true;
var UserManager_js_1 = require("./src/UserManager.js");
var readlineSync = require('readline-sync');
var userManager = new UserManager_js_1["default"]();
var exits = false;
var menu = function () {
    while (!exits) {
        console.log('1: Danh sach nguoi dung');
        console.log('2: Them nguoi dung');
        console.log('3: Xoa nguoi dung');
        console.log('4: Thoat');
        var number = readlineSync.question('Nhap lua chon tinh nang: ');
        switch (number) {
            case "1":
                userManager.showList();
                break;
            case "2":
                userManager.addUser();
                break;
            case "3":
                userManager.deleteUser();
                break;
            default:
                exits = true;
        }
    }
};
menu();
