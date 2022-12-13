"use strict";
exports.__esModule = true;
exports.ProDuctManager = void 0;
var ProDuctManager = /** @class */ (function () {
    function ProDuctManager() {
        this.product = [];
    }
    ProDuctManager.prototype.getAll = function () {
        return this.product;
    };
    ProDuctManager.prototype.add = function (product) {
        this.product.push(product);
    };
    return ProDuctManager;
}());
exports.ProDuctManager = ProDuctManager;
