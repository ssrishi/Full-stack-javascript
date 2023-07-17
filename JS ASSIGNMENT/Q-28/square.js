const prompt = require("prompt-sync")();
let number = Number(prompt("Enter Number : "));

for (let i=0;i<number;i++){
    for (let j=0;j<=number;j++){
        process.stdout.write("*")
    }
    console.log("");
}