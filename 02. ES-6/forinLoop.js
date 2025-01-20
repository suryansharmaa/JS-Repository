// for (let/const <key> in <object>){ ... }

let person = {
  name: "Thor",
  age: 80,
  gender: "Male",
};

for (let keys in person) {
  console.log(keys, " : ", person[keys]);
}

let array = ["one", "two", "three", "four"];

for (let keys in array) {
  console.log(keys, " : ", array[keys]);
}
