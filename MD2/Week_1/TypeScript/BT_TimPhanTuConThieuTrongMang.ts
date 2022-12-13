
let number: string[] = []

let checkArray = (arr) => {
for(let i: any = 0; i < arr.length; i++) {
    if(arr.indexOf(i) === -1) {
        number.push(i)
    }
}
return number;
}

console.log(checkArray([2,3,4,6,7,8,9,10]))