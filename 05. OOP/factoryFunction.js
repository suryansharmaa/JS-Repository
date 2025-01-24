// Factory function is a function which "returns" an object

function newHero(firstName, lastName, power) {
  return {
    firstName: firstName,
    lastName: lastName,
    power: power,
    intro: function () {
      console.log(
        `Hello I'm ${firstName} ${lastName} & my power? haha ${power}`
      );
    },
  };
}

let ironMan = newHero("Tony", "Stark", "Mind");
console.log(ironMan);
ironMan.intro();

// example------------------------------------------------------------

function Vehicles(type, brand, model, year) {
  return {
    type,
    brand,
    model,
    year,
  };
}

let Car = Vehicles("Car", "Audi", "R8", "2021");
let Bike = Vehicles("Bike", "Royal Enfield", "Hunter", "2022");
console.log(Car);
console.log(Bike);
