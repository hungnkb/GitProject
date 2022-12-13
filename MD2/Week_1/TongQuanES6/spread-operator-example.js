// // B1
// const cars1 = ["AUDI", "BMW", "TATA", "MERCEDES"];
// const cars2 = [...cars1];
// const cars3 = [...cars1, "NISSAN", "TOYOTA"];
// console.log(cars1)
// console.log(cars2)
// console.log(cars3)

// //B2
// const cars1 = ["AUDI","BMW","TATA","MERCEDES"];
// const cars2 = ["NISSAN","TOYOTA"];
// const cars3 = [...cars1, ...cars2];
// console.log(cars3)

// // B3
// const cars1 = {
//     Brand : "BMW",
//     Color : "RED"
// }
// const cars2 = {...cars1};
// console.log(cars2)

// // B4
// const cars1 = {
//     Brand : "Toyota",
//     Color : "RED"
// }
// const cars2 = {
//     Brand : "Nissan",
//     Color : "Blue",
//     Year : 2004
// }
// const cars3 = {...cars1, ...cars2};
// console.log(cars3)

// // B5
// const car = "AUDI";
// const a = [...car];
// console.log(a)

// B6
const numbers = [3,5,7,8,9];
const [a,b,c,...others] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(others);