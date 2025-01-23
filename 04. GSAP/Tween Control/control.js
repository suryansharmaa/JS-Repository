const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const restart = document.querySelector(".restart");

let tween = gsap.to(".box1", {
  y: -200,
  ease: "power1",
  duration: 5,
  backgroundColor: "purple",
});

play.addEventListener("click", () => tween.play());
pause.addEventListener("click", () => tween.pause());
restart.addEventListener("click", () => tween.restart());
