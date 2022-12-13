import { Library } from "./0Library";

export class Newspaper extends Library{
    date: string;
    
    constructor(code: number, publisher: string, copy: number, date) {
        super(code, publisher, copy)
        this.date = date;
    }

}