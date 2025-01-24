function Animal(name) {
  this.name = name;
}

Animal.prototype.sound = function () {
  return "Animal Sound";
};

function Dog(name, breed) {
  Animal.call(this, name);
  //   this.name = name;
  this.breed = breed;
}

// As the definition suggests :
// Object.create() method creates a new OBJECT , using an existing OBJECT as PROTOTYPE of newly created OBJECT

Dog.prototype = Object.create(Animal.prototype);

let dog = new Dog("Rocket", "Huskey");
console.log(dog);
console.log(dog.sound());
