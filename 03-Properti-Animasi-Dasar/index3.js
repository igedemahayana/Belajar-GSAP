let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");

gsap.to(box1, {
  xPercent: 200,
  duration: 2,
  skewX: 8,
});

gsap.to(box2, {
  xPercent: 200,
  duration: 2,
  rotation: 360,
  transformOrigin: "left center",
});

gsap.to(box3, {
  x: 200,
  repeat: 0,
  duration: 2,
});
