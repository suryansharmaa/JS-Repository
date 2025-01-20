// Filters the array based on criteria gives new array

let computer = [
  { ram: 4, hdd: 64 },
  { ram: 8, hdd: 256 },
  { ram: 16, hdd: 512 },
  { ram: 24, hdd: 1028 },
];

let need = computer.filter((RAM) => RAM.ram > 16);
console.log(need);

// example -----------------------------------------

let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// filter words with more than 6 alphabets
let require = words.filter((word) => word.length > 6);
console.log(require);
