const prompt = require("prompt-sync")();

let i = 1;

while(i <= 100){
    if(i % 15 === 0){
        console.log(`FizzBuzz`);
    }
    else if(i % 3 === 0){
        console.log(`Fizz`);
    }
    else if(i % 5 === 0){
        console.log(`Buzz`);
    }
    else{
        console.log(i);
    }
    i++;
}