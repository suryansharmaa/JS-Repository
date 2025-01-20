const person = {
  name: "Suryansh",
  age: 50,
  email: "huh@gmail.com",
  hobbies: ["Music", "Tech", "Sports"],
  address: {
    city: "Greater Noida",
    PIN: 123456,
  },
};

let result = JSON.stringify(person);
let R = JSON.parse(result);
console.log(R);
