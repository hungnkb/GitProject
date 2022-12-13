// //B1
// let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];;

// console.log(firstName);
// console.log(secondName);

// //B2
// let [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
// console.log(firstName);
// console.log(thirdName);

// //B3
// let [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];
// console.log(firstName);
// console.log(lastName);

// //B4
// let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
// console.log(firstName);
// console.log(secondName);

// [firstName, secondName] = [secondName, firstName]
// console.log(firstName)
// console.log(secondName)

// //B5
// let NamesList = () => {
//     return ["alpha", "beta", "gamma", "delta"]
// }
// let [firstName, secondName] = NamesList();
// console.log(firstName);
// console.log(secondName);

// //B6
// let marks = {x: 21, y: -34, z: 47};
// const {x,y,z} = marks;
// console.log(x)
// console.log(y)
// console.log(z)

//B7
const marks = {
    section1: {alpha: 15, beta: 16},
    section2: {alpha: -31, beta: 19}
};
const {section1: {alpha: alpha1, beta: beta1}} = marks;
console.log(alpha1, beta1);