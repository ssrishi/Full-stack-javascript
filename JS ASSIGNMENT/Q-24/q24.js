
const even_array = [];
const odd_array = [];

for (let i = 0; i <= 100 ; i++){
    if(i % 2 == 0){
        even_array.push(i);
    }
    else{
        odd_array.push(i);
    }
}
console.log(even_array);
console.log(odd_array);