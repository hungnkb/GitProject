import { LibraryManager } from "./LibraryManager";
var readlineSync = require('readline-sync');

let libraryManager = new LibraryManager();

console.log(`
1. Create new
2. Remove by code
3. Show all book
4. Show all magazine
5. Show all newspaper
6. Exit
`)

let choice = +readlineSync.question('Put your choice: ')

switch (choice) {
    case 1:
        let isLoopCase1 = true;
        while (isLoopCase1) {
            console.log('1. Book')
            console.log('2. Magazine')
            console.log('3. Newspaper')
            let choiceCase1 = +readlineSync.question('Put your choice: ')
            let choiceCode = +readlineSync.question('Put code you are looking for')
            switch (choiceCase1) {
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
            let isContinue = readlineSync.question('Create again? [Y/N]')
            if (isContinue == 'Y') isLoopCase1 = true;
            else isLoopCase1 = false;
            break;
        }
    case 2:
        let isLoopCase2 = true;
        while (isLoopCase2) {
            console.log('1. Book')
            console.log('2. Magazine')
            console.log('3. Newspaper')
            let choiceCase2 = +readlineSync.question('Put your choice: ')
            let choiceCode2 = +readlineSync.question('Put code you are going to remove: ');
            switch (choiceCode2) {
                case 1:
                    if (libraryManager.findbyCode('Book', choiceCode2) == -1) {
                        console.log('This code is not available, try again')
                        isLoopCase2 = false;
                    }
                    else {
                        libraryManager.remove();
                    }
                    break;
                case 2:
                    if (libraryManager.findbyCode('Magazine', choiceCode2) == -1) {
                        console.log('This code is not available, try again')
                        isLoopCase2 = false;
                    }
                    else {
                        libraryManager.remove();
                    }
                    break;
                case 3:
                    if (libraryManager.findbyCode('Newspaper', choiceCode2) == -1) {
                        console.log('This code is not available, try again')
                        isLoopCase2 = false;
                    }
                    else {
                        libraryManager.remove();
                    }
                    break;
            }
            
        }
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