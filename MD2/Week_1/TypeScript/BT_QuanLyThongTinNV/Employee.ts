export enum Gender {
    MALE,
    FEMALE,
    OTHERS,
}
export class Employee {
    name: string;
    gender: Gender;
    birth: string;
    email: string;
    phoneNumber: string;

    constructor(name: string, gender: Gender, birth: string, email: string, phoneNumber?) {
        this.name = name;
        this.gender = gender;
        this.birth = birth;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    showEmployeeInfo(employee: Employee) {
        return employee
    }
    getName() {
        return this.name
    }
    setName(name: string) {
        this.name = name
    }
    getGender() {
        return this.gender
    }
    setGender(gender: Gender) {
        this.gender = gender
    }
    getBirth() {
        return this.birth
    }
    setBirth(birth: string) {
        this.birth = birth
    }
    getEmail() {
        return this.email
    }
    setEmail(email: string) {
        this.email = email
    }
    getPhoneNumber(number: string) {
        return this.phoneNumber
    }
    setPhoneNumber(number: string) {
        this.phoneNumber = number
    }
    addEmployee(name, gender, birth, email, phoneNumber?): void {
        let user: any = new Employee(name, gender, birth, email, phoneNumber)
        return user
    }
}

