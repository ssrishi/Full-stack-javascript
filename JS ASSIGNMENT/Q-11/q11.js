// Use the Date object to do the following activities
// - What is the year today?
// - What is the month today as a number?
// - What is the date today?
// - What is the day today as a number?
// - What is the hours now?
// - What is the minutes now?
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.


let date = new Date();

console.log(`Year Today ${date.getFullYear()}`);
console.log(`\nMonth Today ${date.getMonth()+1}`);
console.log(`\nDate Today ${date.getDate()}`);
console.log(`\nDay Today ${date.getDay()}`);
console.log(`\nHours Now ${date.getHours()}`);
console.log(`\nMinutes Now ${date.getMinutes()}`);
console.log(`\nSeconds from January 1, 1970 to now are ${Date.now()}`);