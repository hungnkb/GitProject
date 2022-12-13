import { Student } from "./Student";
var readlineSync = require('readline-sync')

let HSG: number = 0;
let HSTB: number = 0;
let HSY: number = 0;

export class StudentManager {
    students: Student[] = [];

    add(): void {
        let Code;
        let index;
        do {
        Code = +readlineSync.question('Nhập code sinh viên: ')
        index = this.findByCode(Code)
        }
        while(index == -1)

        let Name = readlineSync.question('Nhập tên sinh viên: ')
        let Email = readlineSync.question('Nhập email sinh viên: ')
        let Pw = readlineSync.question('Nhập password sinh viên: ')
        let Address = readlineSync.question('Nhập địa chỉ sinh viên: ')
        let Group = readlineSync.question('Nhập địa lớp của sinh viên: ')
        let GPA = +readlineSync.question('Nhập điểm GPA của sinh viên: ')
        let newStudent = new Student(Name, Email, Pw, Address, Group, GPA, Code)
        this.students.push(newStudent)
    }

    showList() {
        return this.students
    }

    remove(code: Student): void {
        for (let i = 0; i in this.students; i++) {
            if (code == this.students[i]) {
                this.students.splice(i, 1)
            }
        }
    }

    edit(code: number, data: Student) {
        let isLoop: boolean = false
        let index;
        while (isLoop) {
            do {
                let qCode = +readlineSync.question("Nhập Code sinh viên cần sửa: ")
                index = this.findByCode(qCode)
                if (index == -1) {
                    console.log("Code sinh viên sai, nhập lại")
                }
            } while (index > 0) {
                let q = +readlineSync.question("Bạn cần sửa thông tin nào?: ")
                switch (q) {
                    case 1:
                        let q1 = readlineSync.question("Nhập tên mới: ");
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
                        this.students[index].setGPA(q1)
                    default:
                        q1 = +readlineSync.question("Tiếp tục sửa hay thoát? [Y/N] ");
                        if (q1 == "y") {
                            isLoop = false
                        }
                        else {
                            isLoop = true
                        }
                }
            }
        }
    }

    statistic() {
        for (let i = 0; i in this.students; i++) {
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

        return `- Học sinh giỏi: ${HSG} - Học sinh trung bình: ${HSTB} - Học sinh yếu: ${HSY}`
    }

    findByCode(code: number) {
        for (let i = 0; i in this.students; i++) {
            if (this.students[i].code == code) {
                return i;
            }
        }
        return -1
    }
}

