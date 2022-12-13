"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Magazine = void 0;
var _0Library_1 = require("./0Library");
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine(code, publisher, copy, monthPublish, pages, codeNo) {
        var _this = _super.call(this, code, publisher, copy) || this;
        _this.monthPublish = monthPublish;
        _this.codeNo = codeNo;
        return _this;
    }
    return Magazine;
}(_0Library_1.Library));
exports.Magazine = Magazine;
