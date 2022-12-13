// let sum = (x,y,z) => x+y+z;
// const numbers = [1,2,3];
// console.log(sum.apply(null, numbers));

// //B1
// let sum = (x,y,z) => x+y+z;
// const numbers = [1,2,3];
// console.log(sum(...numbers))

// //B2
// let a = [1,2];
// let b = [1,2,3];
// a.push(...b);
// console.log(a);

// //B3
// let a = [1,2];
// let b = [1,2,3];
// a = [...b];
// console.log(a);

// //B4
// let obj1 = {a: 1, b: 2};
// let obj2 = {...obj1};
// console.log(obj2);

//B5
let a = [1,2];
let b = [3,4,5];
let c = [...a, ...b];
console.log(c)

