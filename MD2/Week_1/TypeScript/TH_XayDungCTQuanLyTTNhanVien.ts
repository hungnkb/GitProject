enum Gender {
    male,
    female,
    others,
}
class Employee {
    name; gender; birth; email; mobile;
    constructor(name: string, gender: Gender, birth: Date, email: string, mobile?: string) {
        this.name = name;
        this.gender = gender;
        this.birth = birth;
        this.email = email;
        this.mobile = mobile;
    }
}

function showEmployee(employee: Employee) {
    console.log("Tên: " + employee.name + "- Giới tính: " + this.gender + " - Ngày sinh: " + employee.birth + " - Email: " + employee.email + " - SĐT: " + employee.mobile)
}

let employeeList: Employee[] = [];
employeeList.push(new Employee("Hưng", Gender.male, new Date("1999-01-12"), "hung@gmail.com", "123"))
employeeList.forEach(showEmployee)