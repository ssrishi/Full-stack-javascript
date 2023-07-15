const prompt = require("prompt-sync")();

let month_number = Number(prompt("Enter month :- "));

function days_in_month(month_number){
    if (month_number <=7){
        if(month_number === 2){
            let year = Number(prompt("Enter year :- "))
            if (leap_year(year) == true){
                console.log("Total Days are 29 in this month");    
            }
            else{
                console.log("Total Days are 28 in this month");
            }
        }
        else if(month_number % 2 != 0){
            console.log("Total Days are 31 in this month");
        }
        else{
            console.log("Total Days are 30 in this month");
        }
    }
    else{
        if(month_number % 2 ==0){
            console.log("Total Days are 30 in this month");
        }
        else{
            console.log("Total Days are 31 in this month");
        }
    }
}
function leap_year(year){
    if (year % 100 == 0){
        if(year %400 != 0){
            return false;
        }
        else{
            return true;
        }
    }
    else if(year % 4 == 0){
        return true
    }
}
days_in_month(month_number);
