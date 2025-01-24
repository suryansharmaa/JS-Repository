// FUNCTION : Blueprint for creating multiple instances of OBJECTS with same structure and behaviour

function CreatePerson(firstName, lastName, program) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.program = program);

  this.intro = function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  };
}

let Thor = new CreatePerson("Thor", "Odinson", "Javascript");
console.log(Thor);
Thor.intro();

// example -----------------------------------------------------

function Person(name, age, gender) {
  (this.name = name),
    (this.age = age),
    (this.gender = gender),
    (this.info = function () {
      console.log(
        `Hi ${this.name} here, I'm ${this.age} yo and I'm a ${this.gender}`
      );
    });
}

let Strange = new Person("Dr Strange", "100", "Male");
let Emma = new Person("Gwen Stacy", "28", "Female");

console.log(Strange);
Strange.info();
console.log(Emma);
Emma.info();
