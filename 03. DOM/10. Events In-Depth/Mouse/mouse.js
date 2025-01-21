let one = document.querySelector(".click");
let two = document.querySelector(".contextmenu");
let three = document.querySelector(".dblclick");
let four = document.querySelector(".mousedown");
let five = document.querySelector(".mouseenter");
let six = document.querySelector(".mouseleave");
let seven = document.querySelector(".mousemove");
let eight = document.querySelector(".mouseout");
let nine = document.querySelector(".mouseover");
let ten = document.querySelector(".mouseup");

// Click
one.addEventListener("click", () => one.classList.toggle("red"));

// ContextMenu
two.addEventListener("contextmenu", () => two.classList.toggle("blue"));

// Double Click
three.addEventListener("dblclick", () => three.classList.toggle("green"));

// Mouse Down
four.addEventListener("mousedown", () => four.classList.toggle("brown"));

// Mouse Enter
five.addEventListener("mouseenter", () => five.classList.toggle("teal"));

// Mouse Leave
six.addEventListener("mosueleave", () => six.classList.toggle("purple"));

// Mouse Move
seven.addEventListener("mousemove", () => seven.classList.toggle("orange"));

// Mouse Out
eight.addEventListener("mouseout", () => eight.classList.toggle("darkgray"));

// Mouse Over
nine.addEventListener("mouseover", () => nine.classList.toggle("magenta"));

// Mouse Up
ten.addEventListener("mosueup", () => ten.classList.toggle("olive"));
