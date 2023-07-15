const prompt = require("prompt-sync")();

let Number = prompt("Enter a Number :- ");

for (let i = Number-1; i>0;i--){
    if(Number % i ==0){
        if (i==1){
            console.log(`${Number} is a prime number`);
        }
        else{
            console.log(`${Number} is not a prime number`);
            break;
        }
    }
}