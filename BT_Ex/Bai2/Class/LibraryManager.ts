var readlineSync = require('readline-sync');
import { Book } from "./Book";
import { Magazine } from "./Magazine";
import { Newspaper } from "./Newspaper";

export class LibraryManager {
    listBook: [] = [];
    listMagazine: [] = [];
    listNewspaper: [] = [];

    add() {

    }

    remove() {

    }

    showDetailAll() {

    }

    showBookDetail() {

    }

    showMagazineDetail() {

    }

    showNewspaperDetail() {

    }

    findbyCode(list: string, code: number) {
        
        if (list == "listBook") {
            for (let i = 0; i in this.listBook; i++) {
                if (this.listBook[i] == code) return 1;
                else return -1
            }
        }
        else if (list == 'listMagazine') {
            for (let i = 0; i in this.listMagazine; i++) {
                if (this.listMagazine[i] == code) return 1;
                else return -1
            }
        }
        else {
            for (let i = 0; i in this.listNewspaper; i++) {
                if (this.listNewspaper[i] == code) return 1;
                else return -1
            }
        }
    }

}