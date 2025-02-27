const timeline = gsap
  .timeline({
    defaults: {
      duration: 2,
      //   repeat: -1,
      //   yoyo: true,
    },
  })
  .to("h1", {
    y: -100,
    color: "white",
  })
  .to(".box1", {
    x: -100,
    backgroundColor: "pink",
  })
  .to(".box2", {
    y: 100,
    backgroundColor: "lightgreen",
  })
  .to(".box3", {
    x: 100,
    backgroundColor: "yellow",
  });
