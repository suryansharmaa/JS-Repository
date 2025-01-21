// href, value, type,

const link = document.querySelector("a");
const input = document.querySelector("input");

// Getting Attributes
console.log(link.href);
// console.log(input.value);
console.log(input.type);

// Setting Attributes
link.href = "https://www.apple.in/";
// console.log((input.value = "Bye"));
console.log((input.type = "Password"));
console.log((input.placeholder = "Please provide a password"));

// getAttribute(<attribute>)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

// setAttributes(<attribute>, <value>)

input.setAttribute("placeholder", "password");
input.getAttribute("type", "password");
