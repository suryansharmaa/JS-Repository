const section = document.querySelector(".sidebar");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  section.classList.toggle("hide");
});
