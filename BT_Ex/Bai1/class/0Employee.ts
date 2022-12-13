export enum Gender {
    MALE,
    FEMALE,
    OTHERS,
}
export class Employee {
    name: string;
    age: number;
    gender: Gender;
    address: string;
    constructor(name: string, age: number, gender: Gender, address: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getGender() {
        return this.gender
    }
    getAddress() {
        return this.address
    }
    setName(name) {
        this.name = name
    }
    setAge(age) {
        this.age = age
    }
    setGender(gender) {
        this.gender = gender
    }
    setAddress(address) {
        this.address = address
    }
}