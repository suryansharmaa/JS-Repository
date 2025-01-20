// Order doesn't matter but name does!

let student = {
  name: "Thor",
  age: 80,
  rollNo: 518,
};

let { age, name, rollNo } = student;
console.log(name, age, rollNo);

// Assign different name
let { name: user, rollNo: ID } = student;
console.log(user, ID);

// Using rest Operator
let { a, b, ...rest } = { a: 101, b: 102, c: 103, d: 104 };
console.log(a, b, rest);
