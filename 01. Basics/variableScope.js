// Global and Local Variables

let x = 10;
console.log(x);

function local() {
  let y = 20;
  return x + y;
}

console.log(local());
