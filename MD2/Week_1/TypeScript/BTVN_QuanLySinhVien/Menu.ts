import { StudentManager } from "./StudentManager";

const readlineSync = require('readline-sync');

export class Menu {
    studentManager: StudentManager;

    constructor() {
        this.studentManager = new StudentManager()
    }
    menu() {
        let exits: boolean = false;
        while (!exits) {
            console.log('1: Danh sách sinh viên')
            console.log('2: Thêm sinh viên')
            console.log('3: Xoá thông tin sinh viên')
            console.log('4. Sửa thông tin sinh viên')
            console.log('5: Thoát')

            let number = +readlineSync.question('Nhập lựa chọn tính năng: ');
            switch (number) {
                case 1:
                    console.log(this.studentManager.showList());
                    break;
                case 2:
                    // let qCode;
                    // let index;
                    // qCode = readlineSync.question('Nhập code sinh viên mới: ');
                    // index = this.studentManager.findByCode(qCode);
                    // while(index == -1) {
                    //     this.studentManager.add()
                    // }
                    // console.log("Code sinh viên đã tồn tại, nhập code khác: ")
                    // do {
                    //     qCode = readlineSync.question('Nhập code sinh viên mới: ');
                    //     index = this.studentManager.findByCode(qCode);
                    //     console.log("Code sinh viên đã tồn tại, nhập code khác: ")
                    // }
                    // while (index == -1)
                    this.studentManager.add()
                    break;
                case 3:
                    let qCode = readlineSync.question('Nhập code sinh viên cần xoá: ')
                    let index = this.studentManager.findByCode(qCode)
                    this.studentManager.remove(qCode);
                    break;
                case 4:

                    break;
                default:
                    exits = true;
                    break;
            }
        }
    }
}