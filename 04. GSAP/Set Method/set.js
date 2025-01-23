gsap.set(".box", {
  opacity: 0,
  background: "white",
});

gsap.to(".box", {
  opacity: 1,
  background: "purple",
  y: 100,
  duration: 3,
  repeat: -1,
  yoyo: true,
});
