const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages);
let Maximum = ages[ages.length - 1];
let Minimum = ages[0]
console.log(`\nMinimum age is ${ages[0]}`);
console.log(`\nMaximum age is ${ages[ages.length - 1]}`);

if (ages.length % 2 == 0){
    console.log(`Two Median ages are ${ages[ages.length/2 -1]} and ${ages[ages.length/2]}`);
}
else{
    console.log(`Median age is ${ages[Math.floor(ages.length /2)]}`);
}

// Find the average age(all items divided by number of items)
let sum = 0;

for (let age of ages){
    sum = sum + age;
}
let Average = Math.ceil(sum / ages.length-1)
console.log(`Average is ${Math.ceil(sum / ages.length-1)}`);

// Find the range of the ages(max minus min)

console.log(`Range of the ages is ${ages[ages.length-1] - ages[0]}`);

// Compare the value of (min - average) and (max - average), use abs() method

let min_average = Math.abs(Minimum-Average);
let max_average = Math.abs(Maximum-Average);

if(min_average > max_average){
    console.log(`${min_average} that is min-average is greater`);
}
else{
    console.log(`${max_average} that is max-average is greater`);
}