class User<T> {
    name: string;
    email: string;
    phone: string;
    gender: string;
    constructor(name: string, email: string, phone: string, gender: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
    }
    getEmail() {
        return this.email
    }
    getPhone() {
        return this.phone
    }
    getName() {
        return this.name
    }
    getGender() {
        return this.gender
    }
}

export default User;
