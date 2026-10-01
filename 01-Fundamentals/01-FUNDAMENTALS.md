## Materi yang sudah dipelajari

// gsap.to() -> Dari kondisi sekarang → kondisi tujuan.
// gsap.from() -> Mulai dari kondisi yang kita kasih → kembali ke kondisi normal.
// gsap.fromTo() -> Kita tentukan awal dan akhirnya.

## Properti Animasi

### Position

x: 300,
y: 100,

Mengatur pergerakan elemen pada sumbu horizontal (x) dan vertikal (y).

### Percentage Position

xPercent: 500,
yPercent: 400,

Mengatur pergerakan elemen berdasarkan persentase dari ukuran elemennya.

### scale

scale: 1.5,
scale: 2,

Mengatur ukuran elemen.

### transformOrigin

transformOrigin: "0% 100%",

Menentukan titik pusat transformasi elemen.

### opacity

opacity: 0.5,

Mengatur tingkat transparansi elemen.
1 = tidak transparan
0.5 = 50% transparan
0 = sepenuhnya transparan

### rotation

rotation: 360,

Memutar elemen berdasarkan derajat.

## Mengatur Waktu

### duration

duration: 2,

Menentukan berapa lama animasi berlangsung dalam satuan detik.

### delay

delay: 2,

Memberikan jeda sebelum animasi dimulai.

### repeat

repeat: 2,

Menentukan berapa kali animasi diulang.

### yoyo

yoyo: true,
Membuat animasi bergerak kembali ke kondisi awal setelah mencapai kondisi akhir. Biasanya digunakan bersama repeat.

### ease

ease: "power1.out", "power2.out", "power3.out", "power4.out", "back.out", "elastic.out", "bounce.out"

ease digunakan untuk mengatur karakter atau rasa dari pergerakan animasi.

### stagger

stagger: 1,

Memberikan jeda antar animasi ketika terdapat beberapa elemen yang dianimasikan.

## Konsep menyambungkan GSAP dengan Element

```JavaScript
// menyambungkan langsung dengan id #
gsap.to("#rectangle", {
  x: 200,
  rotation: 360,
  duration: 2,
});

// menyambungkan dengab variabel yaitu elipse
gsap.to(elipse, {
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
```
