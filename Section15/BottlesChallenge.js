const prompt = require("prompt-sync")();

let total_bottles = parseInt(prompt(`Enter the total bottles: `, "0"),10);

while(total_bottles > 0){
    console.log(`${total_bottles} bottles of jeera on the wall, ${total_bottles} bottles of jeera.`);
    console.log(`Take one jeera bottle down and pass it around, ${--total_bottles} bottles on the wall.`);
    console.log("\n");
}