// ----- Normal Method ------//

function user(username) {
  return `Hello ${username}`;
}
console.log(user("Thor"));

// ----- Arrow Method -------//

user = (username) => `Hello ${username}`;
console.log(user("Thor"));

// example------------------------------

setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    console.log("Namaste");
    setTimeout(() => {
      console.log("Bonjour");
    }, 2000);
  }, 2000);
}, 2000);
