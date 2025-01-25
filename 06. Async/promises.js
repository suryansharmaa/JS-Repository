function checkNum(number) {
  return new Promise((resolve, reject) => {
    number % 2 === 0
      ? resolve(`${number} is an even number`)
      : reject(`${number} is an odd number`);
  });
}

let numToCheck = 7;
checkNum(numToCheck)
  .then((message) => console.log(`${message}`))
  .catch((error) => console.log(`${error}`));

// example-------------------------------------

console.log("Start");

function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Loading ..`);
      resolve(name);
    }, 2000);
  });
}

function getUserHobbies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Getting user hobbies`);
      resolve(["Cricket", "Singing", "Programming"]);
    }, 2000);
  });
}

getUserDataFromDB("Thor")
  .then((name) => getUserHobbies())
  .then((hobbies) => console.log(hobbies))
  .catch((error) => `Error finding hobbies ${error}`);

console.log("End");
