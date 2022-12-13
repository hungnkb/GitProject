export class Book {
    ID: string; 
    name: string;
    constructor(ID, name) {
        this.ID = ID;
        this.name = name;
    }
    Book() {
        return "ID: " + this.ID + "- Name: " + this.name
    }
    getName(): string {
        return this.name
    }
    setName(name: string): void {
        this.name = name
    }
    getID(): string {
        return this.ID
    }
}




