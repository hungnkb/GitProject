import {Book} from "./Book.js"

export class BookManager {
    books: Book[] = [];
    constructor() {
        
    }
    add(book: Book): void {
        this.books.push(book)
    }
    getList(): Book[] {
        return this.books
    }
    delete(ID: string): void {
        for(let i: number = 0; i<this.books.length; i++) {
            if(this.books[i].ID = ID) {
                this.books.splice(i, 1)
            }
        }
    }
    update(ID: string, name: string): void {
        for(let i: number = 0; i<this.books.length; i++) {
            if(this.books[i].ID = ID) {
                this.books[i].name = name;
            }
        }
    }
}