class Staff{
    name: string; 
    email: string; 
    age: number;
    constructor(name: string, email: string, age: number ) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff() {
        console.log(this.name + this.email + this.age)
    }
    getName(): string {
        return this.name
    }
    setName(name: string): void {
        this.name = name;
    }
    getEmail(): string {
        return this.email
    }
    setEmail(email: string): void {
        this.email = email
    }
    getAge(): number {
        return this.age
    }
    setAge(age: number): void {
        this.age = age
    }
}