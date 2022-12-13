class User {
    protected name: string;
    protected email: string;
    role: number;
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    getInfo() {
        return `${this.name} - ${this.email} - ${this.role}`
    }

    isAdmin() {
        if(this.role == 1) {
            return "Admin"
        }
        else {
            return "User"
        }
    }
}

let user1 = new User("Hoang", "hoangngu@gmail.com", 1)

console.log(user1.isAdmin())