
const prompt = require("prompt-sync")();

function calulator(){
    let num1 = Number(prompt("Enter First Number : "));
    let num2 = Number(prompt("Enter Second Number : "));
    const calculation = Number(prompt("What Calculation You want to perforn\n1.) Press 1 for Addition\n2.) Press 2 for Subtraction\n3.) Press 3 for multiplication\n4.) Press 4 for Division\nChoose between 1 to 4 : \n"));


    if(calculation == 1){
    console.log(`${num1} + ${num2} = ${num1+num2}`);
    }
    else if(calculation == 2){
    console.log(`${num1} - ${num2} = ${math.abs(num1-num2)}`);
    }
    else if(calculation == 3){
        console.log(`${num1} * ${num2} = ${num1*num2}`);
    }
    else if(calculation == 4){
        console.log(`${num1} / ${num2} = ${num1/num2}`);
    }
    else{
        console.log("You have Enter Wrong Option");
    }
}
calulator();