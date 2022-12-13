"use strict";
exports.__esModule = true;
var UserManager_1 = require("./src/UserManager");
var readlineSync = require('readline-sync');
var userManager = new UserManager_1["default"]();
var exits = false;
var menu = function () {
    while (!exits) {
        console.log('1: Danh sach nguoi dung');
        console.log('2: Them nguoi dung');
        console.log('3: Xoa nguoi dung');
        console.log('4: Thoat');
    }
};
menu();
