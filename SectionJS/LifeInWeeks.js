const prompt = require("prompt-sync");

let age = parseInt(prompt(`Enter your age: `, "0"), 10);
const max_years = 90;
const years_left = max_years - age;

let months = years_left * 12;
let weeks = years_left * 52;
let days = years_left * 365;

console.log(`You have ${days} days, ${weeks} weeks or ${months} months till you are 90 years.`);