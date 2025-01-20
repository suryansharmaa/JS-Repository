// Using Funtions --------------------------
const four = (a, b, c, d) => {
  console.log("1 : ", a);
  console.log("2 : ", b);
  console.log("3 : ", c);
  console.log("4 : ", d);
};

four(...["red", "green", "blue", "yellow"]);

// Using Arrays -----------------------------
let fruits = ["apple", "melon", "berry"];
let animals = ["dog", ...fruits, "cat"];
console.log(animals);

// Using Objects -----------------------------
let person = {
  name: "Thor",
  age: 100,
  work: "Sleep",
};

let clone = { ...person, color: "Blue" };
console.log(clone);
