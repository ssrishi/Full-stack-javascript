let month_number = 7;

function days_in_month(month_number){
    if (month_number <=7){
        if(month_number === 2){
            console.log("Total Days are 28 in this month");
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

days_in_month(month_number);