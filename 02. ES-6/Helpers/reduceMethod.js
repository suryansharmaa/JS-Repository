let numbers = [1, 2, 3, 4, 5, 6];
let adder = numbers.reduce((prev, current) => {
  console.log(`Previous Value : ${prev}`);
  console.log(`Current Value : ${current}`);
  return prev + current;
}, 0);

console.log(adder);

// example ----------------------------------

let fruits = ["apple", "banana", "orange", "banana", "apple", "grape"];
let eat = fruits.reduce((quantity, word) => {
  quantity[word] = (quantity[word] || 0) + 1;
  return quantity;
}, {});

console.log(eat);

// example 2------------------------------------

const array = [1, 2, 3, 4, 5];

const product = array.reduce((prev, curr) => {
  return prev * curr;
}, 1);

console.log(product);
