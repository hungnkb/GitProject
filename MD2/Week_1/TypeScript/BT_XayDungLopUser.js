var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        return "".concat(this.name, " - ").concat(this.email, " - ").concat(this.role);
    };
    User.prototype.isAdmin = function () {
        if (this.role == 1) {
            return "Admin";
        }
        else {
            return "User";
        }
    };
    return User;
}());
var user1 = new User("Hoang", "hoangngu@gmail.com", 1);
console.log(user1.isAdmin());
