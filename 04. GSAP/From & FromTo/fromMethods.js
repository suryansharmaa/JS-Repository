// From : Don't need to define the initiation point , it'll get it by itself

gsap.from(".box1", {
  y: -200,
  duration: 3,
  repeat: -1,
  ease: "linear",
  yoyo: true,
});

// fromTo : Need to define the initiation point and the destination as well

gsap.fromTo(
  ".box2",
  {
    y: 200,
    opacity: 0,
  },
  {
    y: -200,
    opacity: 1,
    ease: "linear",
    duration: 3,
    borderRadius: 0,
    repeat: -1,
    yoyo: true,
  }
);
