# Pertemuan 6 — Kontrol Playback & Utility

## 🎯 Tujuan Pembelajaran

- Bisa mengontrol animasi dari event (play, pause, reverse) dipicu interaksi user
- Bisa membuat animasi responsive dengan `gsap.matchMedia()`
- Kenal `gsap.utils` dan kapan dipakai

---

## 📖 Materi

### 5.1 Kontrol Playback

Sampai sekarang animasi kamu selalu "auto-jalan" begitu kode dieksekusi. Tapi banyak kasus nyata animasi perlu dikontrol oleh AKSI USER — play/pause di video player kustom, hover untuk reverse, dll. Ini kenapa kamu simpan animasi/timeline ke sebuah variabel:

```js
const tl = gsap.timeline({ paused: true }); // paused: true = JANGAN langsung jalan
tl.to(".box", { x: 300, duration: 1 });

const tombol = document.querySelector("#btnPlay");
tombol.addEventListener("click", function () {
  tl.play();
});
```

Method kontrol yang paling sering dipakai:

```js
tl.play(); // lanjut/mulai jalan maju
tl.pause(); // berhenti di posisi sekarang
tl.reverse(); // jalan MUNDUR dari posisi sekarang
tl.restart(); // ulang dari awal
tl.seek(1.5); // lompat langsung ke detik ke-1.5
tl.progress(0.5); // lompat ke 50% dari total durasi
tl.timeScale(2); // jalankan 2x lebih cepat dari biasanya
```

**Pola yang sering dipakai — toggle play/reverse (cocok untuk hover atau menu buka-tutup):**

```js
let terbuka = false;
tombol.addEventListener("click", function () {
  if (terbuka) {
    tl.reverse();
  } else {
    tl.play();
  }
  terbuka = !terbuka;
});
```

### 5.2 `gsap.matchMedia()` — animasi responsive

Sama seperti CSS media query, kadang kamu ingin animasi yang BERBEDA di mobile vs desktop (misal: animasi geser besar di desktop, tapi di mobile cukup fade saja supaya tidak berat).

```js
let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", function () {
  gsap.to(".box", { x: 300, duration: 1 }); // hanya jalan kalau layar >= 768px
});

mm.add("(max-width: 767px)", function () {
  gsap.to(".box", { opacity: 0.5, duration: 1 }); // animasi berbeda untuk layar kecil
});
```

GSAP otomatis menjalankan ulang fungsi yang sesuai setiap kali ukuran layar melewati breakpoint itu (misal user memutar HP dari portrait ke landscape).

### 5.3 `gsap.utils` — kumpulan fungsi bantu

Ini bukan untuk animasi langsung, tapi fungsi pembantu yang sering dipakai BERSAMA animasi, terutama nanti dengan ScrollTrigger:

```js
gsap.utils.toArray(".box"); // ubah NodeList/selector jadi array JS biasa, supaya bisa pakai method array (map, filter, dll)
gsap.utils.random(0, 100); // angka acak antara 0-100
gsap.utils.mapRange(0, 100, 0, 1, 50); // ubah angka dari satu rentang ke rentang lain (di sini: 50 dari rentang 0-100 jadi 0.5 dari rentang 0-1)
gsap.utils.clamp(0, 100, 150); // "kunci" angka supaya tidak melebihi batas (hasil: 100, karena 150 dibatasi maksimal 100)
```

### 5.4 `gsap.quickTo()` — untuk animasi yang dipanggil berulang-ulang cepat

```js
const xTo = gsap.quickTo(".box", "x", { duration: 0.3, ease: "power3" });

document.addEventListener("mousemove", function (e) {
  xTo(e.clientX); // dipanggil puluhan kali per detik saat mouse bergerak
});
```

`gsap.to()` biasa sebenarnya BISA juga dipakai di sini, tapi `quickTo()` dioptimasi khusus untuk pemanggilan super sering seperti ini (misal elemen yang mengikuti posisi kursor) — jauh lebih ringan performanya.

---

## 💻 Latihan

### Latihan 1 — Tombol Play/Pause/Reverse

Buat satu animasi timeline sederhana (box bergerak + berputar), simpan di variabel, `paused: true`. Buat 3 tombol terpisah: Play, Pause, Reverse — masing-masing memanggil method yang sesuai.

### Latihan 2 — Toggle Menu dengan Reverse (Wajib)

Buat sebuah "menu panel" (`<div>` di luar layar lewat `xPercent: 100`) dan tombol hamburger. Buat timeline `paused: true` yang menganimasikan panel itu masuk ke layar (`xPercent: 0`). Pasang logika toggle play/reverse di tombol — klik pertama panel masuk, klik kedua panel keluar lagi (reverse), dst.

### Latihan 3 — Animasi Responsive

Buat satu box. Pakai `gsap.matchMedia()`: di layar >= 768px animasikan `x: 300`, di layar < 768px animasikan `y: 100` saja (karena di mobile ruang horizontal terbatas). Coba resize browser, perhatikan animasi beradaptasi otomatis.

### Tantangan (Opsional)

Buat sebuah elemen kecil (lingkaran) yang mengikuti posisi kursor mouse menggunakan `gsap.quickTo()` untuk `x` dan `y` sekaligus (butuh 2 `quickTo` terpisah, satu untuk x satu untuk y), dipicu dari event `mousemove` di `document`.

---

## ✅ Checklist Sebelum Lanjut

- [ ] Saya bisa membuat animasi `paused: true` dan mengontrolnya dari tombol
- [ ] Saya paham pola toggle play/reverse
- [ ] Saya bisa membuat animasi berbeda untuk mobile vs desktop pakai `matchMedia()`
- [ ] Saya tahu kapan `quickTo()` lebih tepat dipakai dibanding `.to()` biasa

Kalau semua sudah dicentang → lanjut ke `06-ScrollTrigger`.
