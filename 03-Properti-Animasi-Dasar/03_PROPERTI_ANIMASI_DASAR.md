# Pertemuan 3 — Properti Animasi Dasar

## 🎯 Tujuan Pembelajaran

- Hafal properti animasi yang paling sering dipakai dan fungsinya masing-masing
- Paham beda `x`/`y` (pixel) dengan `xPercent`/`yPercent` (persen)
- Paham kenapa properti transform lebih disarankan daripada properti layout (`left`/`top`/`width`)

---

## 📖 Materi

### 2.1 Properti Posisi

```js
gsap.to(".box", { x: 200 }); // geser 200px ke kanan dari posisi SEKARANG
gsap.to(".box", { y: -50 }); // geser 50px ke ATAS dari posisi sekarang (nilai negatif = ke atas)
gsap.to(".box", { xPercent: 100 }); // geser sejauh 100% dari LEBAR elemen itu sendiri
```

**Kenapa ada `xPercent` kalau sudah ada `x`?** Karena `x` itu pixel tetap — kalau elemen punya ukuran berbeda-beda di berbagai layar (responsive), animasi dengan `x` yang sama akan terasa beda proporsinya. `xPercent` menghitung relatif terhadap ukuran elemen itu sendiri, jadi hasilnya konsisten di ukuran layar manapun. Ini sering dipakai bareng CSS `position: absolute` untuk centering yang presisi, misal `xPercent: -50` untuk menggeser elemen setengah dari lebarnya sendiri ke kiri.

### 2.2 Properti Transformasi

```js
gsap.to(".box", { scale: 1.5 }); // perbesar 1.5x dari ukuran asli (scaleX & scaleY sekaligus)
gsap.to(".box", { scaleX: 2 }); // perbesar HANYA lebar
gsap.to(".box", { rotation: 360 }); // putar 360 derajat
gsap.to(".box", { skewX: 20 }); // miringkan secara horizontal
```

### 2.3 Opacity & Visibility

```js
gsap.to(".box", { opacity: 0 }); // elemen jadi transparan (tapi tetap "ada", masih makan tempat & bisa diklik)
```

### 2.4 `transformOrigin` — titik pusat transformasi

```js
gsap.to(".box", { rotation: 180, transformOrigin: "top left" }); // berputar dari sudut kiri atas, bukan dari tengah (default)
```

Ini penting dipahami karena hasil `rotation` dan `scale` akan terlihat SANGAT berbeda tergantung di mana titik pusatnya ditentukan.

### 2.5 Kenapa `x`/`y`/`scale`/`rotation` lebih disarankan daripada `left`/`top`/`width`/`height`

Ini konsep performa yang penting dipahami dari awal, bukan sekadar kebiasaan:

Browser merender halaman lewat beberapa tahap: **Layout** (hitung ukuran & posisi semua elemen) → **Paint** (gambar pixel-nya) → **Composite** (gabungkan jadi layar akhir). Properti seperti `left`, `top`, `width`, `height` memicu tahap **Layout** diulang — ini MAHAL, apalagi kalau ada banyak elemen lain di sekitarnya yang ikut terpengaruh perhitungan ulang.

Properti `transform` (termasuk `x`, `y`, `scale`, `rotation`) dan `opacity` BISA dikerjakan browser hanya di tahap **Composite**, tanpa mengulang Layout atau Paint — jauh lebih ringan, dan bisa memanfaatkan akselerasi GPU. Inilah alasan utama kenapa animator GSAP (dan CSS modern pada umumnya) selalu mengutamakan `transform` dibanding properti layout.

### 2.6 Properti CSS biasa tetap bisa dianimasikan (tapi secukupnya)

```js
gsap.to(".box", { backgroundColor: "#ff0000", duration: 1 }); // tetap bisa, GSAP otomatis handle interpolasi warna
```

Ini valid dan sering dipakai, tapi untuk animasi yang perlu sangat mulus & sering (misal diulang-ulang cepat), tetap prioritaskan properti transform.

---

## 💻 Latihan

### Latihan 1 — Eksplorasi Properti

Buat satu box. Buat 4 tombol terpisah yang masing-masing menjalankan animasi berbeda saat diklik (`addEventListener`, ingat materi DOM): geser `x`, perbesar `scale`, putar `rotation`, dan transparansi `opacity`. Amati masing-masing efeknya satu-satu.

### Latihan 2 — `x` vs `xPercent`

Buat 2 box dengan ukuran BERBEDA (misal satu 50px, satu 150px lebar). Animasikan box pertama dengan `x: 100`, dan box kedua dengan `xPercent: 100`. Amati: box kedua bergerak sejauh lebarnya sendiri, sedangkan box pertama selalu geser 100px persis berapapun ukurannya.

### Latihan 3 — `transformOrigin` dalam Aksi

Buat satu box persegi panjang (bukan persegi). Animasikan `rotation: 90` dua kali dengan `transformOrigin` berbeda: sekali default (tengah), sekali lagi dengan `transformOrigin: 'left center'`. Bandingkan hasilnya secara visual — tulis dengan kata-katamu sendiri bedanya.

### Tantangan (Opsional)

Buka DevTools → tab Performance → rekam sebentar sambil animasi `left` berjalan (ubah box ke posisi `position: absolute` dan animasikan propertinya langsung lewat `gsap.to('.box', {left: 300})`), lalu bandingkan dengan merekam animasi `x` yang setara. Lihat apakah ada perbedaan beban kerja browser (biasanya terlihat dari warna di flame chart "Layout" vs "Composite").

---

## ✅ Checklist Sebelum Lanjut

- [ ] Saya hafal fungsi `x`, `y`, `scale`, `rotation`, `opacity` tanpa lihat contoh
- [ ] Saya paham beda `x` (pixel tetap) dan `xPercent` (relatif ukuran elemen)
- [ ] Saya paham kenapa properti transform lebih cepat/disarankan daripada `left`/`top`/`width`
- [ ] Saya paham fungsi `transformOrigin`

Kalau semua sudah dicentang → lanjut ke `03-Waktu-dan-Easing`.
