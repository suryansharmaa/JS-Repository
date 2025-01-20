//  Sets promotes data redudancy
//  Useful when unique lists to be made

let set = new Set();

set.add("pineapple");
set.add("berry");
set.add("litchi");

console.log(set.has("berry"));
console.log(set.delete("berry"));
// set.clear();
console.log(set);

for (let fruits of set) {
  console.log(fruits);
}
