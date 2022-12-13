import { Library } from "./0Library";

export class Book extends Library {
    author: string;
    pages: number;
    
    constructor(code: number, publisher: string, copy: number, author: string, pages: number) {
        super(code, publisher, copy);
        this.author = author;
        this.pages = pages;
    }

}