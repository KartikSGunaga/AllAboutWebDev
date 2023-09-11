const prompt = require("prompt-sync")();

arr_range = parseInt(prompt(`Enter the range: `, "0"), 10);
let arr = [];

for(let i = 0; i < arr_range; i++){
    arr[i] = prompt(`Enter the ${i+1} name: `);
}

var max = arr.length;
var min = 0;

var randomNum = Math.floor(Math.random() * max);
var randomPerson = arr[randomNum];
console.log(randomNum)
console.log(randomPerson)

console.log(`${randomPerson} will pay the bill.`)