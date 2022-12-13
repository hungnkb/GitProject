"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, email, password, address) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getAddress = function () {
        return this.address;
    };
    return User;
}());
exports.User = User;
