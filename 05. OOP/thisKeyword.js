let person = {
  firstName: "Thor",
  age: 1500,

  greetRegular: function () {
    return `Hello I'm ${this.firstName} & I'm ${this.age} years old`;
  },

  greetArrow: () => {
    return `Hello I'm ${this.firstName} & I'm ${this.age} years old`;
  },
};

console.log(person.greetRegular());
console.log(person.greetArrow());
