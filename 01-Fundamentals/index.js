let title = document.querySelector("#title");
let rectangle = document.querySelector("#rectangle");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");
let elipse2 = document.querySelector("#elipse2");
let boxAll = document.querySelectorAll("#boxAll");

// gsap.to() -> Dari kondisi sekarang → kondisi tujuan.
// gsap.from() -> Mulai dari kondisi yang kita kasih → kembali ke kondisi normal.
// gsap.fromTo() -> Kita tentukan awal dan akhirnya.

// menyambungkan langsung dari html tag id #
gsap.to("#rectangle", {
  x: 200,
  rotation: 360,
  duration: 2,
});

// menyambungkan dari variabel elipse
gsap.to(elipse1, {
  x: 400,
  y: 60,
  duration: 2,
});

// jika ingin menambahkan lebih dari 1 element
gsap.to([box1, box2], {
  x: 300,
  y: 100,
  rotation: 360,
  duration: 3,
});

// Percent
gsap.to(box3, {
  xPercent: 200,
  yPercent: 200,
  scale: 0.8,
  duration: 2,
});

// transformOrigin
gsap.to(box4, {
  xPercent: 500,
  yPercent: 400,
  scale: 1.5,
  transformOrigin: "0% 100%",
  opacity: 0.5,
  rotation: 360,
  duration: 2,
});

// ease -> tanpa easing gerakan terasa lebih linear, dengan easing gerakan lebih natural
/*
ease: "power1.out"
ease: "power2.out"
ease: "power3.out"
ease: "power4.out"
ease: "back.out"
ease: "elastic.out"
ease: "bounce.out"
*/
gsap.to(box5, {
  x: 200,
  duration: 3,
  rotation: 360,
  ease: "power2.out",
});

gsap.to(elipse2, {
  x: 300,
  y: 150,
  duration: 3,
  ease: "back.out",
});

// delay -> Menunggu sebelum animasi mulai.
gsap.from(title, {
  y: 200,
  duration: 1,
  ease: "power1.out",
  delay: 2,
});

// repeat: 2 & yoyo: true,

// stagger -> akan muncul dengan waktu tertentu
gsap.to(boxAll, {
  x: 200,
  opacity: 0,
  duration: 2,
  stagger: 1,
});
