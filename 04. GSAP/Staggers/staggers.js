// Consider Stagger DOCS for more, this is just basic example

gsap.set(".box", { borderRadius: 0 });

gsap.to(".box", {
  y: -200,
  repeat: -1,
  yoyo: true,
  ease: "power1",
  duration: 2,
  borderRadius: 100,
  stagger: {
    amount: 2,
    each: 0.5,
    from: 0,
  },
});
