export class Product {
    name: string; price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name
    }
    setName(name: string) {
        this.name = name
    }
    getPrice(): number {
        return this.price
    }
    setPrice(price) {
        this.price = price
    }
}