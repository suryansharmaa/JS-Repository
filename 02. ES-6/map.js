// Map Data Structure

let map = new Map();

let key1 = "String";
let key2 = {};
let key3 = function () {};

map.set(key1, "JavaScript");
map.set(key2, "This is empty object");
map.set(key3, "Anonymous Function");

console.log(map.keys());
console.log(map.values());
console.log(map.delete(key2));
console.log(map.size);
console.log(map);

// Iteration Method

// for (let [key, value] of map) {
//   console.log(`${key}   ${value}`);
// }

for (let key of map.keys()) {
  console.log(key);
}

for (let values of map.values()) {
  console.log(values);
}

// example-------------------------------

let newmap = new Map();
newmap.set("a", 1);
newmap.set("b", 2);
newmap.set("c", 3);

console.log(newmap.get("a"));
console.log(newmap.size);
console.log(newmap.delete("b"));
console.log(newmap.size);
