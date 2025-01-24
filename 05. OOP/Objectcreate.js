// Object.create() creates a new OBJECT using existing OBJECT as protoype

let person = {
  greet: function () {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
};

let thor = Object.create(person);
thor.firstName = "Thor";
thor.lastName = "Odinson";

thor.greet();

let spiderman = Object.create(person, {
  firstName: { value: "Peter" },
  lastName: { value: "Parker" },
});

spiderman.greet();
