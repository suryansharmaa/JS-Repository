// example-1 ----------------------
const a = 1;
const b = 2;
const c = 3;

const enhance = {
  a,
  b,
  c,
};

console.log(enhance);

// example-2 ----------------------
const library = {
  sum: (a, b) => a + b,
  multiply: (a, b) => a * b,
};

console.log(library.sum(4, 5));
console.log(library.multiply(4, 5));
