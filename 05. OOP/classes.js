// Same as JAVA

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //   Prototype Method
  hello() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

//  Inheritance same as JAVA

class Avgengers extends Person {
  constructor(firstName, lastName, age, city) {
    super(firstName, lastName, age);
    this.city = city;
  }

  greet() {
    return `Hello ${this.firstName} ${this.lastName} of city ${this.city}`;
  }
}

let person = new Person("Tony", "Stark", "40");
console.log(person);
console.log(person.hello());

let thor = new Avgengers("Thor", "Odinson", 1500, "Asgard");
console.log(thor);
console.log(thor.greet());
