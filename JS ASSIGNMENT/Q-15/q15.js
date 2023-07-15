let scores = "59";
scores = Number(scores)

if(scores >= 80 && scores <= 100){
    console.log("You got A grade");
}
else if(scores >= 70 && scores <= 89){
    console.log("You got B grade");
}
else if(scores >= 60 && scores <= 69){
    console.log("You got C grade");
}
else if(scores >= 50 && scores <= 59){
    console.log("You got D grade");
}
else{
    console.log("You got F grade");
}