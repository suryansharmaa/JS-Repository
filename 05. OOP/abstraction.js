class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    throw new Error("Method (sound()) must be implemented");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  sound() {
    return `Woof!`;
  }
}

let dog = new Dog("Husky");
console.log(dog);
console.log(dog.sound());
