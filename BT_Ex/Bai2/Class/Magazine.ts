import { Library } from "./0Library";

export class Magazine extends Library {
    monthPublish: number;
    codeNo: number;
    
    constructor(code: number, publisher: string, copy: number, monthPublish: number, pages: number, codeNo: number) {
        super(code, publisher, copy)
        this.monthPublish = monthPublish;
        this.codeNo = codeNo;
    }

}