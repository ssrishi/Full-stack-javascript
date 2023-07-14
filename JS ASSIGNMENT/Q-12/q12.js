let now = new Date();

year = now.getFullYear()
month = now.getMonth()
date = now.getDate();
hours = now.getHours()
minutes = now.getMinutes()


// Date Formats
console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
console.log(`\n${date}-${month}-${year} ${hours}:${minutes}`);
console.log(`\n${date}/${month}/${year} ${hours}:${minutes}`);
