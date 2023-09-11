const prompt = require("prompt-sync")();

function isLeap(year){
    if(year % 400 === 0){
        return true;
    }
    else if(year % 100 === 0){
        return false;
    }
    else if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const year = parseInt(prompt(`Enter the year: `, "0"), 0);
if(isLeap(year)){
    console.log(`The year ${year} is a leap year.`);
}
else{
    console.log(`The year ${year} is not a leap year.`);
}