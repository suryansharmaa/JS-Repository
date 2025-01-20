// Destructuring/Unpacking Arrays

let number = ["one", "two", "three"];
let [red, green, yellow, blue] = number;

console.log(red);
console.log(blue);

let a, b;
[a = 2, b = 8] = [1];
console.log(a, b);

f = () => [2, 3];
let c, d;
[c, d] = f();
console.log(c, d);

// Ignoring an element in array

r = () => [1, 2, 3, 4];
let [e, , g] = r();
console.log(e, g);

// Assigning rest of an array to a variable

let [i, ...j] = ["one", "two", "three", 1, true];
console.log(i, j);

// Example -------------------------------------

let colors = ["red", "green", "blue", "yellow"];
let [color1, color2, color3] = colors;
console.log(color1, color2, color3);
