const prompt = require("prompt-sync")();
const file_name = prompt("Enter File Name : ");


const extention = file_name.split(".");
console.log(`Extention is ${extention[extention.length-1]}`);
