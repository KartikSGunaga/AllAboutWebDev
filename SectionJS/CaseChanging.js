const prompt = require("prompt-sync")();

let name = prompt("Enter name: ");

console.log(`entered name is: ${name}.`)

let length = name.length;

name = name.slice(0,1).toUpperCase() + name.slice(1,length);

console.log(`modified name is: ${name}.`)