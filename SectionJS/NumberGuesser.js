const prompt = require("prompt-sync")();

const number = Math.floor(Math.random()*100);
let chances = 5;

do{
    let guess = prompt("Guess the number: ");
    if(guess == number){
        console.log(`You have guessed it correctly! The number was ${number}.`)
        break;
    }

    if(chances == 1){
        console.log(`The number was: ${number}.`);
        break;
    }
    
    else if(guess < number){
        console.log(`take a higher guess.`);
        chances --;
    }
    else{
        console.log(`Take a lower guess`);
        chances --;
    }
}while(chances > 0);