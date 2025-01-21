// Parent Elements
let list1 = document.querySelector("li");
console.log(list1);
console.log(list1.parentElement);
console.log(list1.parentElement.parentElement);
console.log(list1.parentElement.parentElement.parentElement);
console.log(list1.parentElement.parentElement.parentElement.parentElement);

// Child Elements
let unorder = document.querySelector("ul");
console.log(unorder);
console.log(unorder.children);
console.log(unorder.children[3]);
console.log((unorder.children[0].innerText = "one"));

// Next Sibling Method
console.log(list1.nextElementSibling);
console.log(list1.nextElementSibling.textContent);
console.log(list1.nextElementSibling.nextElementSibling.textContent);

// Previous Sibling Method
let list4 = document.querySelector(".fourth");
console.log(list4.previousElementSibling);
console.log(list4.previousElementSibling.textContent);
console.log(list4.previousElementSibling.previousElementSibling.textContent);
