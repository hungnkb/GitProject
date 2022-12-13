const inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
]
let initialValue = 0;

let inventoryMachine = inventory.filter(check=>check.type=="machine")


let totalMachineValue = inventoryMachine.reduce(function (total, currentValue) {
    return total + currentValue.value;
},  initialValue)

console.log(totalMachineValue)
