# Pertemuan 5 — Timeline

## 🎯 Tujuan Pembelajaran

- Paham kenapa Timeline dibutuhkan (masalah yang diselesaikannya)
- Bisa membuat urutan animasi dengan `gsap.timeline()`
- Paham dan bisa pakai position parameter untuk overlap/jeda antar animasi
- Bisa memakai label untuk menandai titik tertentu di timeline

---

## 📖 Materi

### 4.1 Masalah Tanpa Timeline

Bayangkan kamu mau animasi 3 langkah: box masuk dari kiri → lalu berputar → lalu membesar. Tanpa Timeline, kamu harus pakai `delay` manual untuk tiap animasi:

```js
gsap.to(".box", { x: 0, duration: 1 });
gsap.to(".box", { rotation: 360, duration: 1, delay: 1 }); // hitung manual: mulai setelah animasi pertama (1 detik)
gsap.to(".box", { scale: 1.5, duration: 1, delay: 2 }); // hitung manual lagi: 1 + 1 = 2 detik
```

Masalahnya: kalau durasi animasi pertama diubah, kamu harus hitung ULANG semua angka `delay` setelahnya secara manual. Ini rapuh dan gampang salah.

### 4.2 Solusi: `gsap.timeline()`

```js
const tl = gsap.timeline();

tl.to(".box", { x: 0, duration: 1 })
  .to(".box", { rotation: 360, duration: 1 })
  .to(".box", { scale: 1.5, duration: 1 });
```

Dengan Timeline, tiap animasi otomatis jalan SETELAH animasi sebelumnya selesai — tidak perlu hitung `delay` manual sama sekali. Kalau durasi animasi pertama diubah, semua animasi setelahnya otomatis menyesuaikan.

### 4.3 Position Parameter — mengatur overlap & jeda

Ini bagian yang membuat Timeline jauh lebih powerful daripada sekadar "urutan otomatis". Parameter kedua (opsional) di tiap `.to()` dalam timeline menentukan KAPAN TEPATNYA animasi itu dimulai, relatif terhadap animasi lain:

```js
tl.to(".box1", { x: 100, duration: 1 })
  .to(".box2", { y: 100, duration: 1 }, "-=0.5") // mulai 0.5 detik SEBELUM animasi sebelumnya selesai (overlap)
  .to(".box3", { opacity: 0, duration: 1 }, "+=0.3") // mulai 0.3 detik SETELAH animasi sebelumnya selesai (ada jeda)
  .to(".box4", { scale: 2, duration: 1 }, "<") // mulai BERSAMAAN dengan animasi SEBELUM yang terakhir dimulai
  .to(".box5", { rotation: 180, duration: 1 }, 0); // mulai TEPAT di detik ke-0 (dari awal timeline, absolut)
```

| Syntax        | Artinya                                                      |
| ------------- | ------------------------------------------------------------ |
| (tidak diisi) | mulai setelah animasi sebelumnya SELESAI (default)           |
| `'-=0.5'`     | mulai 0.5 detik sebelum animasi sebelumnya selesai (overlap) |
| `'+=0.3'`     | mulai 0.3 detik setelah animasi sebelumnya selesai (jeda)    |
| `'<'`         | mulai bersamaan dengan animasi sebelumnya DIMULAI            |
| `0` / angka   | posisi ABSOLUT di timeline (detik ke-berapa dari awal)       |

### 4.4 Label — penanda posisi

```js
const tl = gsap.timeline();

tl.addLabel("masuk")
  .to(".box", { x: 100, duration: 1 })
  .addLabel("putar")
  .to(".box", { rotation: 360, duration: 1 })
  .to(".lainnya", { opacity: 1 }, "putar"); // mulai BERSAMAAN dengan label 'putar'
```

Label berguna untuk menandai titik penting, terutama nanti kalau timeline-nya panjang dan dikombinasikan dengan ScrollTrigger (Pertemuan 6) — kamu bisa bilang "scroll ke titik label ini", bukan menghitung detik manual.

### 4.5 Nested Timeline

Timeline bisa dimasukkan ke dalam timeline lain — berguna untuk memecah animasi kompleks jadi "modul" yang lebih kecil dan mudah diatur ulang:

```js
const introBox1 = gsap.timeline();
introBox1.to(".box1", { x: 100 }).to(".box1", { rotation: 360 });

const masterTimeline = gsap.timeline();
masterTimeline.add(introBox1).to(".box2", { opacity: 1 });
```

---

## 💻 Latihan

### Latihan 1 — Timeline Dasar

Buat 3 box berjejer. Buat satu timeline yang menganimasikan ketiganya SECARA BERURUTAN (box 1 selesai dulu, baru box 2 mulai, dst) — masing-masing bergerak `y: -30` lalu balik ke posisi semula.

### Latihan 2 — Overlap dengan Position Parameter (Wajib)

Buat animasi "kartu muncul": sebuah card yang animasinya terdiri dari `opacity: 0 → 1` DAN `y: 50 → 0` DAN `scale: 0.8 → 1`. Buat ketiga animasi ini di dalam SATU timeline, tapi buat semuanya jalan **bersamaan** menggunakan `'<'`, dibanding kalau dipisah jadi 3 `.to()` berurutan tanpa position parameter. Bandingkan hasilnya.

### Latihan 3 — Timeline dengan Label

Buat timeline untuk animasi "loading sequence": logo muncul (`opacity`) → diberi label `'logoSiap'` → teks judul muncul BERSAMAAN dengan label itu (pakai posisi `'logoSiap'`) → lalu tombol muncul dengan jeda `'+=0.3'` setelah teks judul.

### Tantangan (Opsional)

Buat 5 box dalam satu `<div>`. Buat timeline yang menganimasikan `scale` tiap box dari 0 ke 1 secara berurutan DENGAN overlap `-=0.8` antar box (hampir semua box animasi bersamaan tapi tetap ada jeda kecil). Bandingkan "rasa"-nya dengan kalau kamu pakai `stagger` biasa (Pertemuan 3) — kapan menurutmu Timeline lebih cocok dipakai dibanding `stagger`?

---

## ✅ Checklist Sebelum Lanjut

- [ ] Saya paham kenapa Timeline lebih baik daripada mengatur `delay` manual satu-satu
- [ ] Saya bisa menjelaskan arti `-=0.5`, `+=0.3`, `'<'`, dan posisi absolut tanpa lihat tabel
- [ ] Saya bisa pakai label untuk menandai dan mengacu posisi tertentu di timeline
- [ ] Saya berhasil menyelesaikan Latihan 2 dan Latihan 3

Kalau semua sudah dicentang → lanjut ke `05-Kontrol-Playback-dan-Utility`.
