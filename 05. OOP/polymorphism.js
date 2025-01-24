class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    return `Animal Speaks`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  //   Overriding
  sound() {
    return `Woof!`;
  }
}

let animal = new Animal("Animal");
console.log(animal.sound());

let dog = new Dog("Husky");
console.log(dog);
console.log(dog.sound());
