export class Employee {
    firstName: string;
    lastName: string;
    birthday: string;
    address: string;
    role: string;
    constructor(firstName: string, lastName: string, birthday: string, address: string, role: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.address = address;
        this.role = role;
    }
}
