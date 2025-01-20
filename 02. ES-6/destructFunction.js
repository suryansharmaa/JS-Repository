let person = {
  name: "Thor",
  age: 80,
  country: "Asgard",
};

info = ({ name, age, country }) => {
  console.log("Name : ", name);
  console.log("Age : ", age);
  console.log("Country : ", country);
};

info(person);
