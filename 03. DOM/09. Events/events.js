// Bad Way 2
const bad = document.querySelector(".second-btn");
bad.onclick = () => console.log(" You are touching wrong button!");

// Best Way to do it
const best = document.querySelector(".best");
best.addEventListener("click", () => console.log("Hello World"));

// Event (e) Object ------------------------------------------------
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
});
