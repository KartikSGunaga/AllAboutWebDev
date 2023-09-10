const prompt = require("prompt-sync")();

function bmiCalc(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}

var weight = parseFloat(prompt(`Enter the weight: `, "0"), 10.0);
var height = parseFloat(prompt(`Enter the height: `, "0"), 10.0);
console.log(`Your BMI is: ${bmiCalc(weight, height)}.`);
