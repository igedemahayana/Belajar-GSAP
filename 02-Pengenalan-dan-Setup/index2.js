let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");

// gsap.to() = animasi dari kondisi sekarang ke nilai yang dikasi
gsap.to(box1, {
  x: 200,
  y: 10,
  duration: 2,
});

// gsap.from() = animasi dari yang kamu kasih ke kondisi sekarang
gsap.from(box2, {
  x: 200,
  y: 20,
  duration: 2,
});

// gsap.fromTo() = kita yang menentukan sendiri titik awal dan titik akhirnya
gsap.fromTo(
  box3,
  { opacity: 0, x: -100 }, // dari sini
  { opacity: 1, x: 20, duration: 2 }, // ke sini
);

gsap.fromTo(box4, { x: 30 }, { x: 200, y: 20, rotation: 360, duration: 2 });

/*
.to() — paling sering dipakai, dipakai kalau kondisi awal elemen sudah sesuai yang kamu mau
.from() — dipakai kalau kamu mau elemen "muncul" dari kondisi tertentu ke kondisi normalnya
.fromTo() — dipakai kalau kamu butuh kontrol penuh dan presisi di kedua titik, tidak mau bergantung pada kondisi CSS yang mungkin berubah
*/
