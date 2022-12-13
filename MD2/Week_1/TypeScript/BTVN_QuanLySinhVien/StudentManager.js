"use strict";
exports.__esModule = true;
exports.StudentManager = void 0;
var Student_1 = require("./Student");
var readlineSync = require('readline-sync');
var HSG = 0;
var HSTB = 0;
var HSY = 0;
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.students = [];
    }
    StudentManager.prototype.add = function () {
        var Code = +readlineSync.question('Nhập code sinh viên: ');
        var Name = readlineSync.question('Nhập tên sinh viên: ');
        var Email = readlineSync.question('Nhập email sinh viên: ');
        var Pw = readlineSync.question('Nhập password sinh viên: ');
        var Address = readlineSync.question('Nhập địa chỉ sinh viên: ');
        var Group = readlineSync.question('Nhập địa lớp của sinh viên: ');
        var GPA = +readlineSync.question('Nhập điểm GPA của sinh viên: ');
        var newStudent = new Student_1.Student(Name, Email, Pw, Address, Group, GPA, Code);
        this.students.push(newStudent);
    };
    StudentManager.prototype.showList = function () {
        return this.students;
    };
    StudentManager.prototype.remove = function (code) {
        for (var i = 0; i in this.students; i++) {
            if (code == this.students[i]) {
                this.students.splice(i, 1);
            }
        }
    };
    StudentManager.prototype.edit = function (code, data) {
        var isLoop = false;
        var index;
        while (isLoop) {
            do {
                var qCode = +readlineSync.question("Nhập Code sinh viên cần sửa: ");
                index = this.findByCode(qCode);
                if (index == -1) {
                    console.log("Code sinh viên sai, nhập lại");
                }
            } while (index > 0);
            {
                var q = +readlineSync.question("Bạn cần sửa thông tin nào?: ");
                switch (q) {
                    case 1:
                        var q1 = readlineSync.question("Nhập tên mới: ");
                        this.students[index].setName(q1);
                        break;
                    case 2:
                        q1 = readlineSync.question("Nhập email mới: ");
                        this.students[index].setEmail(q1);
                        break;
                    case 3:
                        q1 = readlineSync.question("Nhập password mới: ");
                        this.students[index].setPassword(q1);
                        break;
                    case 4:
                        q1 = readlineSync.question("Nhập địa chỉ mới: ");
                        this.students[index].setAddress(q1);
                        break;
                    case 5:
                        q1 = readlineSync.question("Nhập lớp mới: ");
                        this.students[index].setGroup(q1);
                        break;
                    case 6:
                        q1 = +readlineSync.question("Nhập điểm GPA mới: ");
                        this.students[index].setGPA(q1);
                    default:
                        q1 = +readlineSync.question("Tiếp tục sửa hay thoát? [Y/N] ");
                        if (q1 == "y") {
                            isLoop = false;
                        }
                        else {
                            isLoop = true;
                        }
                }
            }
        }
    };
    StudentManager.prototype.statistic = function () {
        for (var i = 0; i in this.students; i++) {
            if (this.students[i].GPA >= 8) {
                HSG++;
            }
            else if (this.students[i].GPA >= 6.5 && this.students[i].GPA < 8) {
                HSTB++;
            }
            else if (this.students[i].GPA < 6.5) {
                HSY++;
            }
        }
        return "- H\u1ECDc sinh gi\u1ECFi: ".concat(HSG, " - H\u1ECDc sinh trung b\u00ECnh: ").concat(HSTB, " - H\u1ECDc sinh y\u1EBFu: ").concat(HSY);
    };
    StudentManager.prototype.findByCode = function (code) {
        for (var i = 0; i in this.students; i++) {
            if (this.students[i].code == code) {
                return i;
            }
        }
        return -1;
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
