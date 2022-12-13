var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["others"] = 2] = "others";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(name, gender, birth, email, mobile) {
        this.name = name;
        this.gender = gender;
        this.birth = birth;
        this.email = email;
        this.mobile = mobile;
    }
    return Employee;
}());
function showEmployee(employee) {
    console.log("Tên: " + employee.name + "- Giới tính: " + this.gender + " - Ngày sinh: " + employee.birth + " - Email: " + employee.email + " - SĐT: " + employee.mobile);
}
var employeeList = [];
employeeList.push(new Employee("Hưng", Gender.male, new Date("1999-01-12"), "hung@gmail.com", "123"));
employeeList.forEach(showEmployee);
