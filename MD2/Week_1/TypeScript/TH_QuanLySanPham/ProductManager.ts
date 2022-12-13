import { Product } from "./Product";
export class ProDuctManager {
    private product: Product[] = [];
    constructor() {

    }
    getAll() {
        return this.product
    }
    add(product) {
        this.product.push(product)
    }
}