const input = document.querySelector("input");

// Key Press
// input.addEventListener("keypress", () => console.log("Key Pressed"));

// Key Down
// input.addEventListener("keydown", () => console.log("Clicked a button!"));

// Key Up
// input.addEventListener("keyup", () => console.log("Left the pressed button!"));

// Useful Methods
input.addEventListener("keypress", (e) => {
  //   console.log(e.charcode);
  //   console.log(e.code);
  //   console.log(e.ctrlKey);
  console.log(e.key);
  //   console.log(e.shiftKey);
});
