const prompt = require("prompt-sync")();
let n = Number(prompt("Enter Number : "));

for (let i=0;i<n;i++){
    for (let j=0;j<=(n-1)*2;j++){
        if (j < n-1-i || j>n-1+i) {
            process.stdout.write(" ");
        }
        else{
            process.stdout.write("*");
        }
    }
    console.log("");
}