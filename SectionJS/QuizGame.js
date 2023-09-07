const prompt = require("prompt-sync")();

console.log("Welcome to the quiz game!");
var correct = 0;
var wrong = 0;

const value = prompt("Enter name: ");
console.log(`Hello ${value}!`);

console.log("What is the brain of the computer? ");
const answer1 = prompt("Your answer: ");

console.log("What is the brain of the computer? ");
const answer2 = prompt("Your answer: ").toLowerCase();

console.log("What is the brain of the computer? ");
const answer3 = prompt("Your answer: ").toLowerCase();

console.log("What is the brain of the computer? ");
const answer4 = prompt("Your answer: ").toLowerCase();

console.log("What is the brain of the computer? ");
const answer5 = prompt("Your answer: ").toLowerCase();

if(answer1 === "cpu"){
    correct += 1;
}
else{
    wrong += 1;
}

if(answer2 === "cpu"){
    correct += 1;
}
else{
    wrong += 1;
}

if(answer3 === "cpu"){
    correct += 1;
}
else{
    wrong += 1;
}

if(answer4 === "cpu"){
    correct += 1;
}
else{
    wrong += 1;
}

if(answer5 === "cpu"){
    correct += 1;
}
else{
    wrong += 1;
}

const percentage = ((correct / 5) * 100).toFixed(2);

console.log(`You have got ${correct} correct and ${wrong} wrong answers.`)
console.log(`You have scored: ${percentage}%.`)