
const prompt = require("prompt-sync")();
let number = Number(prompt("Enter Number : "));

function Table(number){
    for(let i=1; i<=10; i++){
        console.log(`${number} * ${i} = ${number*i}`);
    }
}
Table(number);