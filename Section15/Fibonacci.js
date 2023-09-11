const prompt = require("prompt-sync")();

let range = parseInt(prompt(`Enter the range: `, "0"), 10);
let prev = 0;
let previous = 0;

for(let i = 0; i < range; i++){
    console.log(prev + previous);
    previous = prev;
    prev = i;
}
