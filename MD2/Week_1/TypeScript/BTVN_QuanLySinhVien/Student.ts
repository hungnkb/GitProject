import { User } from "./User";

export class Student extends User {
    group: string;
    GPA: number;
    code: number;
    constructor(name: string, email: string, password: string, address: string, group: string, GPA: number, code: number) {
        super(name, email, password, address);
        this.group = group;
        this.GPA = GPA;
        this.code = code;
    }
    setName(name: string) {
        this.name = name
    }
    setEmail(email: string) {
        this.email = email
    }
    setPassword(password: string) {
        this.password = password
    }
    setAddress(address: string) {
        this.address = address
    }
    setGroup(group: string) {
        this.group = group
    }
    setGPA(GPA: number) {
        this.GPA = GPA
    }
}