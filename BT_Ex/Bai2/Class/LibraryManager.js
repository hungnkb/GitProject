"use strict";
exports.__esModule = true;
exports.LibraryManager = void 0;
var readlineSync = require('readline-sync');
var LibraryManager = /** @class */ (function () {
    function LibraryManager() {
        this.listBook = [];
        this.listMagazine = [];
        this.listNewspaper = [];
    }
    LibraryManager.prototype.add = function () {
    };
    LibraryManager.prototype.remove = function () {
    };
    LibraryManager.prototype.showDetailAll = function () {
    };
    LibraryManager.prototype.showBookDetail = function () {
    };
    LibraryManager.prototype.showMagazineDetail = function () {
    };
    LibraryManager.prototype.showNewspaperDetail = function () {
    };
    LibraryManager.prototype.findbyCode = function (list, code) {
        if (list == "listBook") {
            for (var i = 0; i in this.listBook; i++) {
                if (this.listBook[i] == code)
                    return 1;
                else
                    return -1;
            }
        }
        else if (list == 'listMagazine') {
            for (var i = 0; i in this.listMagazine; i++) {
                if (this.listMagazine[i] == code)
                    return 1;
                else
                    return -1;
            }
        }
        else {
            for (var i = 0; i in this.listNewspaper; i++) {
                if (this.listNewspaper[i] == code)
                    return 1;
                else
                    return -1;
            }
        }
    };
    return LibraryManager;
}());
exports.LibraryManager = LibraryManager;
