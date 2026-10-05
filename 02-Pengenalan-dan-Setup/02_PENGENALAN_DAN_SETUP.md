# Pertemuan 2 — Pengenalan GSAP & Setup

## 🎯 Tujuan Pembelajaran

- Paham apa itu GSAP dan kenapa dibutuhkan (padahal CSS sudah bisa animasi)
- Bisa instalasi GSAP (CDN & NPM)
- Bisa membuat animasi pertama dengan `gsap.to()`, `gsap.from()`, `gsap.fromTo()`

---

## 📖 Materi

### 1.1 Apa itu GSAP?

**GSAP (GreenSock Animation Platform)** adalah library JavaScript khusus untuk membuat animasi. Pertanyaan yang wajar muncul: kamu sudah bisa animasi pakai CSS `transition` dan `@keyframes` (dari materi CSS sebelumnya) — kenapa masih butuh GSAP?

Jawabannya ada di 3 batasan utama CSS native yang GSAP selesaikan:

1. **Sequencing kompleks** — CSS kesulitan mengatur banyak animasi yang harus berjalan berurutan atau saling overlap dengan presisi. GSAP punya Timeline (Pertemuan 4) yang menyelesaikan ini dengan sangat elegan.
2. **Kontrol dari JavaScript** — animasi CSS sulit di-pause, reverse, atau diubah kecepatannya secara dinamis dari kode. Di GSAP, semua itu tinggal panggil method.
3. **Konsistensi lintas browser** — GSAP menangani banyak inkonsistensi browser secara otomatis yang kalau pakai CSS native harus kamu tangani manual.

**Penting diingat:** GSAP bukan pengganti CSS — ini **pelengkap**. CSS tetap dipakai untuk layout dan styling dasar; GSAP dipakai ketika kamu butuh kontrol animasi yang lebih kompleks dari apa yang CSS native bisa berikan dengan nyaman.

### 1.2 Instalasi

**Cara 1 — CDN (paling cepat untuk belajar/prototipe):**

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js"></script>
```

**Cara 2 — NPM (untuk project yang pakai build tool seperti Vite, atau nantinya React):**

```bash
npm install gsap
```

```js
import { gsap } from "gsap";
```

**Catatan penting untuk 2026:** sejak Webflow mengakuisisi GreenSock, **seluruh GSAP termasuk semua plugin yang dulu berbayar (SplitText, MorphSVG, Flip, dll) sekarang 100% gratis**, termasuk untuk pemakaian komersial. Jadi kamu tidak perlu khawatir soal lisensi sama sekali.

### 1.3 Tiga Method Inti

```js
// gsap.to() — animasi DARI kondisi sekarang KE nilai yang kamu kasih
gsap.to(".box", { x: 200, duration: 1 });

// gsap.from() — animasi DARI nilai yang kamu kasih KE kondisi sekarang
gsap.from(".box", { opacity: 0, y: 50, duration: 1 }); // sering dipakai untuk efek "muncul"

// gsap.fromTo() — kamu tentukan SENDIRI titik awal DAN titik akhir
gsap.fromTo(
  ".box",
  { opacity: 0, x: -100 }, // dari sini
  { opacity: 1, x: 0, duration: 1 }, // ke sini
);
```

**Kapan pakai yang mana?**

- `.to()` — paling sering dipakai, dipakai kalau kondisi awal elemen sudah sesuai yang kamu mau (misal posisi normal di CSS)
- `.from()` — dipakai kalau kamu mau elemen "muncul" dari kondisi tertentu ke kondisi normalnya
- `.fromTo()` — dipakai kalau kamu butuh kontrol penuh dan presisi di kedua titik, tidak mau bergantung pada kondisi CSS yang mungkin berubah

### 1.4 Targeting — cara GSAP "menunjuk" elemen

Perhatikan: parameter pertama di semua method GSAP itu **selector string**, persis seperti `querySelector` yang sudah kamu kuasai di materi DOM:

```js
gsap.to('.box', {...});       // pakai class
gsap.to('#judul', {...});     // pakai id
gsap.to('.box', {...});       // semua elemen dengan class ini otomatis ikut dianimasikan
```

GSAP otomatis menangani kasus "banyak elemen cocok" tanpa kamu perlu loop manual seperti di DOM vanilla — ini salah satu kenyamanan GSAP dibanding manipulasi CSS manual lewat JS.

---

## 💻 Latihan

### Latihan 1 — Setup Pertama

Buat file HTML baru, pasang GSAP lewat CDN, buat satu `<div class="box">` dengan CSS dasar (ukuran, warna background). Jalankan `gsap.to('.box', { x: 300, duration: 2 })`. Pastikan box-nya benar-benar bergerak 300px ke kanan selama 2 detik.

### Latihan 2 — Bandingkan `.to()` vs `.from()`

Buat 2 box. Box pertama animasikan dengan `gsap.to()` memindahkan opacity ke 0. Box kedua animasikan dengan `gsap.from()` dari opacity 0. Amati: box pertama MULAI terlihat lalu MENGHILANG; box kedua MULAI tidak terlihat lalu MUNCUL. Tulis dengan kata-katamu sendiri kenapa hasilnya berkebalikan.

### Latihan 3 — `fromTo()` Presisi

Buat satu box yang di CSS-nya sudah diberi `opacity: 0.5` secara default. Gunakan `gsap.fromTo()` untuk memastikan animasi SELALU mulai dari opacity 0 dan berakhir di opacity 1, TIDAK PEDULI nilai opacity default di CSS-nya berapa.

---

## ✅ Checklist Sebelum Lanjut

- [ ] Saya paham kenapa GSAP dibutuhkan walau CSS sudah bisa animasi
- [ ] GSAP berhasil terpasang dan animasi pertama berjalan
- [ ] Saya paham beda `.to()`, `.from()`, dan `.fromTo()` tanpa harus lihat contoh
- [ ] Saya paham cara targeting elemen di GSAP sama seperti `querySelector`

Kalau semua sudah dicentang → lanjut ke `02-Properti-Animasi-Dasar`.
