# Pertemuan 7 — ScrollTrigger

## 🎯 Tujuan Pembelajaran

- Bisa memicu animasi berdasarkan posisi scroll
- Paham parameter inti: `trigger`, `start`, `end`, `scrub`, `pin`, `markers`
- Bisa membuat efek scroll-reveal dan pinned section

---

## 📖 Materi

### 6.1 Apa itu ScrollTrigger?

ScrollTrigger adalah plugin GSAP yang paling populer — dia menghubungkan animasi dengan **posisi scroll** halaman. Ini pengganti native yang jauh lebih powerful dari Intersection Observer (yang sudah kamu kenal di materi DOM) kalau butuh kontrol animasi yang presisi berdasarkan scroll.

### 6.2 Registrasi Plugin

Plugin di GSAP (selain core) harus didaftarkan dulu sebelum dipakai:

```js
gsap.registerPlugin(ScrollTrigger);
```

(Kalau pakai CDN, tambahkan juga `<script src=".../ScrollTrigger.min.js"></script>` setelah script GSAP core.)

### 6.3 Penggunaan Dasar

```js
gsap.to(".box", {
  x: 300,
  scrollTrigger: {
    trigger: ".box", // elemen yang jadi "pemicu" — ScrollTrigger mengamati posisi elemen ini
    start: "top 80%", // animasi mulai ketika bagian ATAS elemen mencapai 80% tinggi viewport
    end: "top 30%", // animasi selesai ketika bagian ATAS elemen mencapai 30% tinggi viewport
    markers: true, // tampilkan penanda visual di layar (SANGAT membantu waktu development, HAPUS saat production)
  },
});
```

**Cara membaca `start`/`end`:** formatnya `"[posisi elemen] [posisi viewport]"`. Jadi `'top 80%'` artinya: "ketika TOP dari elemen trigger menyentuh 80% TINGGI VIEWPORT (dari atas)".

### 6.4 `scrub` — animasi mengikuti scroll secara langsung

```js
gsap.to(".box", {
  x: 300,
  scrollTrigger: {
    trigger: ".box",
    start: "top center",
    end: "bottom center",
    scrub: true, // progress animasi LANGSUNG mengikuti posisi scroll, bukan jalan otomatis sekali
  },
});
```

Tanpa `scrub`, animasi akan jalan SEKALI secara otomatis begitu trigger terpenuhi (seperti animasi biasa). Dengan `scrub: true`, posisi animasi benar-benar "terikat" ke posisi scroll — scroll naik, animasi mundur; scroll turun, animasi maju. `scrub: 1` (angka, bukan boolean) menambahkan sedikit jeda/kelambatan yang membuatnya terasa lebih halus.

### 6.5 `pin` — menempelkan elemen sementara

```js
gsap.to(".panel", {
  x: "-300%", // geser 3 panel ke kiri (efek horizontal scroll)
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=3000", // "durasi" scroll dalam pixel sebelum pin dilepas
    pin: true, // elemen trigger akan "menempel" di layar selama scroll berlangsung
    scrub: 1,
  },
});
```

`pin: true` adalah teknik di balik efek populer "horizontal scroll section" atau "section yang tetap di layar sambil kontennya berubah" yang sering kamu lihat di landing page modern.

### 6.6 Checklist Debugging ScrollTrigger

Hampir semua masalah pemula di ScrollTrigger disebabkan oleh beberapa hal ini:

1. **Lupa `gsap.registerPlugin(ScrollTrigger)`** — animasi sama sekali tidak jalan
2. **`start`/`end` salah arah** — selalu nyalakan `markers: true` dulu waktu development untuk melihat persis di mana titik trigger-nya
3. **Konten berubah tinggi setelah load** (misal gambar baru selesai dimuat) — posisi trigger jadi meleset. Solusi: panggil `ScrollTrigger.refresh()` setelah konten dinamis selesai dimuat

---

## 💻 Latihan

### Latihan 1 — Scroll Reveal Sederhana

Buat halaman dengan 5 `<div class="box">` yang disusun vertikal dengan jarak jauh (pakai `margin` besar/`min-height` tinggi supaya perlu discroll). Beri `opacity: 0` di CSS. Animasikan tiap box `opacity: 1` dan `y: 0` (dari `y: 50` lewat `.from()`) dengan ScrollTrigger `trigger: box itu sendiri`, `start: 'top 85%'`. Nyalakan `markers: true` dulu untuk melihat titik triggernya.

### Latihan 2 — Progress Bar Mengikuti Scroll (Wajib)

Buat sebuah bar tipis horizontal di bagian paling atas halaman (`position: fixed`, `width: 0%` default). Animasikan `width` bar itu dari `0%` ke `100%` dengan `scrollTrigger` yang `trigger`-nya adalah `document.body` (atau elemen pembungkus utama), `start: 'top top'`, `end: 'bottom bottom'`, dan `scrub: true`. Ini pola umum untuk "reading progress indicator".

### Latihan 3 — Pinned Section

Buat sebuah section dengan 3 `.panel` tersusun secara horizontal di dalam container yang lebarnya 300% (pakai `display: flex`, tiap panel `width: 100vw`). Animasikan `x` container itu dari `0` ke `-200vw` dengan `pin: true` dan `scrub: 1` pada container pembungkusnya. Scroll halaman, amati efek "section menempel sambil konten geser horizontal".

### Tantangan (Opsional)

Cari tahu (boleh googling "ScrollTrigger.batch()"): kenapa untuk HALAMAN DENGAN BANYAK elemen scroll-reveal (puluhan atau ratusan), disarankan pakai `ScrollTrigger.batch()` daripada membuat ScrollTrigger terpisah untuk tiap elemen satu-satu?

---

## ✅ Checklist Sebelum Lanjut

- [ ] Saya paham cara membaca format `start`/`end` seperti `'top 80%'`
- [ ] Saya paham beda animasi ScrollTrigger biasa dengan `scrub: true`
- [ ] Saya bisa membuat efek pinned section sederhana
- [ ] Saya tahu checklist debugging dasar kalau ScrollTrigger tidak jalan

Kalau semua sudah dicentang → lanjut ke `07-Plugin-Lanjutan`.
