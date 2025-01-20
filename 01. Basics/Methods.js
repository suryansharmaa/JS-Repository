const person = {
  name: "Suryansh",
  age: "20",

  greet: function () {
    return `My name is ${person.name} & I am ${person.age} years old`;
  },
};

console.log(person.greet());
