// Prototypes are parents of OBJECTS {array, object, function}

let array = new Array();
console.log(array);
console.log(array.__proto__.__proto__.__proto__);

function Greet(firstName, lastName) {
  return {
    firstName,
    lastName,

    info: function () {
      return `Hello ${this.firstName} ${this.lastName}`;
    },
  };
}

let person = new Greet("Thor", "Odinson");
console.log(person);
console.log(person.constructor.prototype.__proto__);

// We can change built-in methods of prototype

console.log(Array.prototype);
Array.prototype.pop = () => console.log("Bring me THANOS!");

let arr = [1, 2, 3, 4, 5];
arr.pop();

// Create custom methods for prototype

String.prototype.hello = function () {
  console.log(this);
  console.log(this.toUpperCase());
};

"wassup boy!".hello();
