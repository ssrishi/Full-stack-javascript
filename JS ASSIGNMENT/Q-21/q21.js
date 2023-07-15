const countries = require("../Q-19/countries");

let check_Ethiopia = () => {
    if (countries.includes("Ethiopia")){
        console.log(countries[countries.indexOf("Ethiopia")].toUpperCase());
    }
    else{
        countries.push("Ethiopia");
        console.log(countries);
    }
}
check_Ethiopia();