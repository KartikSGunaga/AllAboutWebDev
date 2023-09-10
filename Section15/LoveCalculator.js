const prompt = require("prompt-sync")();

const person1 = prompt(`Enter name1: `);
const person2 = prompt(`Enter name2: `);

var randomNum = Math.floor(Math.random()*100);
console.log(`Your love score is: ${randomNum}%.`);