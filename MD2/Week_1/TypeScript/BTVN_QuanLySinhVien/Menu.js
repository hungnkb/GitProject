"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var StudentManager_1 = require("./StudentManager");
var readlineSync = require('readline-sync');
var Menu = /** @class */ (function () {
    function Menu() {
        this.studentManager = new StudentManager_1.StudentManager();
    }
    Menu.prototype.menu = function () {
        var exits = false;
        while (!exits) {
            console.log('1: Danh sách sinh viên');
            console.log('2: Thêm sinh viên');
            console.log('3: Xoá thông tin sinh viên');
            console.log('4. Sửa thông tin sinh viên');
            console.log('5: Thoát');
            var number = +readlineSync.question('Nhập lựa chọn tính năng: ');
            switch (number) {
                case 1:
                    console.log(this.studentManager.showList());
                    break;
                case 2:
                    var qCode = void 0;
                    var index = void 0;
                    qCode = readlineSync.question('Nhập code sinh viên mới: ');
                    index = this.studentManager.findByCode(qCode);
                    while (index == -1) {
                        this.studentManager.add();
                    }
                    console.log("Code sinh viên đã tồn tại, nhập code khác: ");
                    // do {
                    //     qCode = readlineSync.question('Nhập code sinh viên mới: ');
                    //     index = this.studentManager.findByCode(qCode);
                    //     console.log("Code sinh viên đã tồn tại, nhập code khác: ")
                    // }
                    // while (index == -1)
                    // this.studentManager.add()
                    break;
                case 3:
                    qCode = readlineSync.question('Nhập code sinh viên cần xoá: ');
                    index = this.studentManager.findByCode(qCode);
                    this.studentManager.remove(qCode);
                    break;
                case 4:
                    break;
                default:
                    exits = true;
                    break;
            }
        }
    };
    return Menu;
}());
exports.Menu = Menu;
