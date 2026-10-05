# Pertemuan 9 — Proyek Akhir GSAP (Capstone)

## 🎯 Tujuan Pembelajaran

Menggabungkan SELURUH materi Pertemuan 1-7 dalam satu halaman landing page beranimasi penuh — mensimulasikan kebutuhan animasi di proyek nyata.

---

## 📖 Spesifikasi Proyek: "Landing Page Beranimasi"

Gunakan HTML + CSS dari materi sebelumnya (boleh pakai ulang struktur dari roadmap HTML5/CSS3) sebagai dasar, lalu tambahkan animasi berikut:

### Fitur yang harus ada:

1. **Hero Section — animasi masuk saat halaman dimuat** _(Pertemuan 1, 3, 4)_
   Judul, subjudul, dan tombol CTA muncul berurutan dengan Timeline (bukan `delay` manual), pakai easing yang terasa natural.

2. **Navbar — animasi responsif terhadap scroll** _(Pertemuan 5, 6)_
   Navbar berubah ukuran/background saat user scroll ke bawah (gunakan ScrollTrigger dengan `toggleClass`, atau kontrol manual pakai `onUpdate`).

3. **Section "Fitur" — scroll reveal dengan stagger** _(Pertemuan 3, 6)_
   3-4 kartu fitur muncul satu-satu (stagger) saat di-scroll ke posisinya, pakai ScrollTrigger.

4. **Progress bar scroll** _(Pertemuan 6)_
   Bar tipis di atas halaman yang mengikuti posisi scroll (`scrub: true`).

5. **Judul section dengan SplitText** _(Pertemuan 7)_
   Minimal satu judul section besar yang animasinya huruf-per-huruf.

6. **Tombol dengan hover animation** _(Pertemuan 1, 5)_
   Tombol CTA punya animasi scale/warna saat di-hover, menggunakan event `mouseenter`/`mouseleave` (ingat materi DOM) yang memicu `gsap.to()`.

7. **Responsive — animasi beda di mobile** _(Pertemuan 5)_
   Minimal satu animasi yang disesuaikan/disederhanakan untuk layar mobile lewat `gsap.matchMedia()`.

---

## 💻 Langkah Pengerjaan (Kerjakan Berurutan)

### Tahap 1 — Struktur & Hero Animation

Siapkan HTML/CSS landing page dasar (Hero, Navbar, Fitur, Footer). Fokus dulu ke animasi Hero Section pakai Timeline — ini yang pertama dilihat user, jadi harus terasa mulus.

### Tahap 2 — Scroll-Triggered Sections

Tambahkan ScrollTrigger untuk section Fitur (reveal dengan stagger) dan progress bar.

### Tahap 3 — Detail & Polish

Tambahkan SplitText di judul section, hover animation di tombol, dan navbar yang bereaksi terhadap scroll.

### Tahap 4 — Responsive Pass

Cek di ukuran mobile (DevTools responsive mode). Sesuaikan/sederhanakan animasi yang terlalu berat atau tidak pas di layar kecil pakai `gsap.matchMedia()`.

### Tahap 5 (Bonus) — Performance Check

Buka DevTools → Performance, rekam saat scroll melewati semua section. Pastikan animasi tetap terasa mulus (idealnya di atas 50fps) — kalau ada yang patah-patah, cek apakah kamu memakai properti `transform`/`opacity` (Pertemuan 2) atau malah properti layout yang berat.

---

## ✅ Checklist Kelulusan Proyek

- [ ] Hero section beranimasi masuk pakai Timeline, bukan `delay` manual satu-satu
- [ ] Minimal satu section beranimasi berdasarkan ScrollTrigger dengan stagger
- [ ] Progress bar scroll berfungsi dengan `scrub: true`
- [ ] Minimal satu judul memakai SplitText
- [ ] Tombol punya hover animation yang dipicu event DOM
- [ ] Ada perbedaan animasi (atau animasi disederhanakan) untuk ukuran mobile
- [ ] **(Mandiri)** Kamu bisa menjelaskan kenapa tiap animasi dipilih sebagai `.to()`/`.from()`/Timeline, bukan asal pakai

---

## 🎓 Kalau Proyek Ini Sudah Selesai

Kamu sudah menguasai fondasi GSAP yang cukup kuat untuk sebagian besar kebutuhan animasi web. Langkah berikutnya:

1. **React + GSAP** — pelajari `useGSAP()` dari `@gsap/react` untuk mengintegrasikan animasi GSAP yang baru kamu kuasai ke dalam component React (lanjut ke folder `03-React`)
2. **Eksplorasi plugin lanjutan sesuai kebutuhan project** — Flip untuk layout dinamis, Draggable untuk interaksi custom, MorphSVG untuk ilustrasi kompleks
3. **Studi kasus nyata** — buka landing page beranimasi favorit kamu, buka DevTools, coba tebak properti dan teknik GSAP apa yang mereka pakai (ini latihan "membaca kode orang lain" yang sangat melatih intuisi)

Selamat, kamu sudah menyelesaikan silabus GSAP. 🎉
