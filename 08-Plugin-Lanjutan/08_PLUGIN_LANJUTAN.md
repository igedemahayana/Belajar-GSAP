# Pertemuan 8 — Plugin Lanjutan (Overview)

## 🎯 Tujuan Pembelajaran

- Tahu plugin-plugin GSAP lain yang tersedia dan kapan dipakai
- Bisa mencoba minimal 2 plugin dari daftar ini secara langsung
- Paham bahwa SEMUA plugin ini gratis sejak akuisisi Webflow

> Catatan: pertemuan ini sifatnya **overview luas, bukan mendalam** — tujuannya supaya kamu tahu plugin apa yang "ada" dan kapan harus dicari lagi dokumentasinya saat benar-benar dibutuhkan di project nyata. Jangan coba hafal semua detail API-nya sekarang.

---

## 📖 Materi

### 7.1 Flip — animasi perpindahan state/layout

**Bayangin gini:** kamu punya galeri foto, lalu user klik "filter", dan susunan foto berubah (ada yang hilang, ada yang pindah posisi). Daripada hitung manual animasi perpindahan tiap foto, Flip cukup butuh tahu "sebelum" dan "sesudah" — sisanya dihitung otomatis.

```js
gsap.registerPlugin(Flip);

const state = Flip.getState(".foto"); // simpan posisi SEBELUM perubahan
// ...lakukan perubahan DOM/class di sini (misal ubah urutan, sembunyikan beberapa foto)...
Flip.from(state, { duration: 0.6, ease: "power1.inOut" }); // animasikan dari posisi lama ke posisi baru
```

Dipakai untuk: filter galeri, reorder list, layout grid ke list dan sebaliknya.

### 7.2 Draggable + Inertia — elemen bisa diseret

```js
gsap.registerPlugin(Draggable, InertiaPlugin);

Draggable.create(".box", {
  type: "x,y", // bisa diseret ke segala arah
  inertia: true, // ada efek "lempar" dengan momentum natural setelah dilepas
  bounds: ".container", // dibatasi area tertentu
});
```

Dipakai untuk: slider kustom, galeri yang bisa digeser manual, elemen UI yang bisa dipindah-pindah user.

### 7.3 Observer — deteksi interaksi seragam di semua device

```js
gsap.registerPlugin(Observer);

Observer.create({
  target: window,
  type: "wheel,touch",
  onDown: () => console.log("scroll/swipe ke bawah"),
  onUp: () => console.log("scroll/swipe ke atas"),
});
```

Lebih sederhana dari ScrollTrigger kalau kamu cuma butuh "deteksi arah swipe/scroll" tanpa perlu animasi terikat posisi scroll presisi.

### 7.4 SplitText & ScrambleText — efek teks

```js
gsap.registerPlugin(SplitText);

const split = new SplitText(".judul", { type: "chars" }); // pecah teks jadi karakter individual
gsap.from(split.chars, { opacity: 0, y: 20, stagger: 0.03 }); // animasikan tiap karakter beruntun
```

Dipakai untuk: judul yang muncul huruf per huruf, efek teks "ketikan", headline landing page yang dramatis.

### 7.5 DrawSVG & MorphSVG — animasi SVG

```js
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

gsap.from(".garis-svg", { drawSVG: "0%", duration: 1.5 }); // garis SVG "digambar" dari nol
gsap.to("#bentukA", { morphSVG: "#bentukB", duration: 1 }); // satu bentuk SVG berubah jadi bentuk lain
```

Dipakai untuk: ikon yang "digambar" saat muncul, logo yang bermorph jadi bentuk lain, ilustrasi interaktif.

### 7.6 MotionPathPlugin — elemen bergerak mengikuti jalur

```js
gsap.registerPlugin(MotionPathPlugin);

gsap.to(".pesawat", {
  motionPath: {
    path: "#jalurSVG", // elemen akan mengikuti bentuk path SVG ini
    align: "#jalurSVG",
    autoRotate: true, // elemen otomatis berputar mengikuti arah jalur
  },
  duration: 3,
});
```

Dipakai untuk: elemen yang bergerak mengikuti lintasan tidak lurus (pesawat terbang mengikuti rute, kursor custom mengikuti jalur rumit).

### 7.7 CustomEase, CustomWiggle, CustomBounce

Kalau easing bawaan (Pertemuan 3) belum cukup, plugin ini memungkinkan kamu membuat kurva easing sendiri, atau efek goyang (`wiggle`)/memantul (`bounce`) yang dikustomisasi detail.

### 7.8 GSDevTools — alat debug visual

```js
gsap.registerPlugin(GSDevTools);
GSDevTools.create(); // menambahkan panel kontrol visual di bawah layar untuk scrub timeline, play/pause, dll
```

Sangat membantu saat development untuk melihat dan menyesuaikan timing animasi secara visual, tanpa harus reload halaman berkali-kali.

---

## 💻 Latihan

### Latihan 1 — Flip (Wajib coba minimal ini)

Buat 6 kotak kecil dalam sebuah `<div>` flex. Buat tombol "Acak Urutan" yang mengubah urutan DOM-nya (boleh pakai `appendChild` untuk memindahkan elemen — ingat materi DOM). Gunakan `Flip.getState()` sebelum perubahan dan `Flip.from()` sesudahnya supaya perpindahan kotak terlihat beranimasi mulus, bukan "lompat" tiba-tiba.

### Latihan 2 — SplitText untuk Judul

Buat sebuah `<h1>` judul. Gunakan `SplitText` untuk memecahnya jadi per-karakter, lalu animasikan muncul satu-satu dengan `stagger` (ingat Pertemuan 3).

### Latihan 3 (Pilih salah satu) — Draggable atau MotionPath

Pilih salah satu: (a) buat elemen yang bisa diseret bebas dalam sebuah container dengan `Draggable`, atau (b) buat sebuah bentuk SVG garis lengkung sederhana dan buat satu elemen bergerak mengikutinya dengan `MotionPathPlugin`.

---

## ✅ Checklist Sebelum Lanjut

- [ ] Saya tahu minimal fungsi dari 6 plugin di atas, walau belum hafal detail API-nya
- [ ] Saya berhasil mencoba langsung Flip dan SplitText
- [ ] Saya paham bahwa plugin dicari detailnya di dokumentasi SAAT dibutuhkan di project nyata, bukan dihafal semua dari awal

Kalau semua sudah dicentang → lanjut ke `08-Proyek-Akhir-GSAP`.
