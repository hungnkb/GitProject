import { Product } from "./Product";
import { ProDuctManager } from "./ProductManager";

let laptop = new Product("Laptop", 20000);
let iphone = new Product("Iphone", 10000);

let productManager = new ProDuctManager();
productManager.add(laptop);
productManager.add(iphone);

console.log(productManager.getAll())