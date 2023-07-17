const prompt = require("prompt-sync")();
let weight = Number(prompt("Enter your weight (KG) : "));
let height = Number(prompt("Enter your height (Meters) : "));

const BODY_MASS_INDEX = () =>{
    let bmi = (weight/(height * height));
    if(bmi < 18.5){
        console.log(`You BMI is ${bmi} and you are under weight`);
    }
    else if(bmi >=18.5 && bmi <= 24.9){
        console.log(`You BMI is ${bmi} and you have normal weight`);
    }
    else if(bmi >=25 && bmi <= 29.9){
        console.log(`You BMI is ${bmi} and you are over weight`);
    }
    else{
        console.log(`You BMI is ${bmi} and you are Obese\n Do exercise and be fit`);
    }
}
BODY_MASS_INDEX();