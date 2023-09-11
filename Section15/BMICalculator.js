const prompt = require("prompt-sync")();

//Function to calculate BMI:
function bmiCalculator(weight, height){
    var bmi = Math.floor(weight / (height * height), 2);
    return bmi;
}

function message(bmi){
    if(bmi < 18.5){
        console.log(`Your BMI is ${bmi}, so you are underweight.`)
    }
    else if(bmi < 24.9){
        console.log(`Your BMI is ${bmi}, so you have normal weight.`)
    }
    else{
        console.log(`Your BMI is ${bmi}, so you are overweight.`)
    }
}

const weight = prompt(`Enter the weight: `);
const height = prompt(`Enter the height: `);

var calculateBMI = bmiCalculator(weight, height);
message(calculateBMI);

