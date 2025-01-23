// let timeline = gsap.timeline();

// timeline
//   .to(".box1", {
//     duration: 2,
//     scale: 0,
//     opacity: 0,
//     delay: 1,
//   })
//   .to(".box2", {
//     x: -190,
//     duration: 2,
//   })
//   .to(".box3", {
//     x: -200,
//     duration: 2,
//     borderRadius: 0,
//     rotate: 360,
//   })
//   .set(".box1", {
//     duration: 2,
//     scale: 1,
//     opacity: 1,
//     delay: 1,
//   });

// REFACTOR

let timeline = gsap.timeline({
  defaults: {
    duration: 2,
  },
});

timeline
  .to(".box1", {
    scale: 0,
    opacity: 0,
    delay: 1,
  })
  .to(".box2", {
    x: -190,
  })
  .to(".box3", {
    x: -200,
    borderRadius: 0,
    rotate: 360,
  })
  .set(".box1", {
    scale: 1,
    opacity: 1,
    delay: 1,
  });
