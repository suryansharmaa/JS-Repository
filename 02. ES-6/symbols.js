let symbol = Symbol();
console.log(typeof symbol);

let symbol1 = Symbol("name");
let symbol2 = Symbol("name");

const random = {};
random.num = 80;
random["value"] = "idk";
random["string"] = "Javascript";
random[symbol1] = "Random";
random[symbol2] = "Ransom";

console.log(random);

// example-----------------------

let food = Symbol("foo");
console.log(typeof food);

const obj = {};
obj.firstName = "John";
obj.lastName = "Doe";

obj[Symbol()] = "Consider this some value";
console.log(obj);

for (let idx in obj) {
  console.log(idx);
}
