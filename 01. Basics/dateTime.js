let date1 = new Date();
console.log(date1);

// Year, Month, Day, Hours, Minutes, Seconds, Milliseconds
let date2 = new Date(2025, 0, 19, 19, 39, 0, 0);
console.log(date2);

// Methods of Date
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();

console.log(`Year : ${year}`);
console.log(`Month : ${month}`);
console.log(`Day : ${day}`);
console.log(`Hours : ${hours}`);
console.log(`Minutes : ${minutes}`);

console.log(date.toDateString());
