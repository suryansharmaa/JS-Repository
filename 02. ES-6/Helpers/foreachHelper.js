// For Each helper doesn't give a new result. It just modifies the data
// array.forEach((element, index, array){ .. })

let words = ["hello", "bird", "table", "cricket", "code", "program"];
words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words);

// example -------------------------------------

let num = [1, 2, 3, 4, 5, 6];
let sum = 0;
adder = (number) => (sum = sum + number);

num.forEach(adder);
console.log(sum);
