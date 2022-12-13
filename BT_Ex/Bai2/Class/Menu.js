"use strict";
exports.__esModule = true;
var LibraryManager_1 = require("./LibraryManager");
var readlineSync = require('readline-sync');
var libraryManager = new LibraryManager_1.LibraryManager();
console.log("\n1. Create new\n2. Remove by code\n3. Show all book\n4. Show all magazine\n5. Show all newspaper\n6. Exit\n");
var choice = +readlineSync.question('Put your choice: ');
switch (choice) {
    case 1:
        var isLoopCase1 = true;
        while (isLoopCase1) {
            console.log('1. Book');
            console.log('2. Magazine');
            console.log('3. Newspaper');
            var choice1 = +readlineSync.question('Put your choice: ');
            var choiceCode = +readlineSync.question('Put code you are looking for');
            switch (choice1) {
                case 1:
                    libraryManager.findbyCode('Book', choiceCode);
                    break;
                case 2:
                    libraryManager.findbyCode('Magazine', choiceCode);
                    break;
                case 3:
                    libraryManager.findbyCode('Newspaper', choiceCode);
                    break;
            }
            var isContinue = readlineSync.question('Create again? [Y/N]');
            if (isContinue == 'Y')
                isLoopCase1 = true;
            else
                isLoopCase1 = false;
            break;
        }
    case 2:
        libraryManager.remove();
        break;
    case 3:
        libraryManager.showBookDetail();
        break;
    case 4:
        libraryManager.showMagazineDetail();
        break;
    case 5:
        libraryManager.showNewspaperDetail();
        break;
}
