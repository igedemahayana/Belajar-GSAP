# Pertemuan 4 — Waktu & Easing

## 🎯 Tujuan Pembelajaran

- Bisa mengatur `duration` dan `delay` dengan tepat
- Paham apa itu easing dan kenapa ini yang membuat animasi terasa "natural"
- Bisa membuat animasi berulang dengan `repeat`, `yoyo`, `repeatDelay`
- Bisa menganimasikan banyak elemen berurutan dengan `stagger`

---

## 📖 Materi

### 3.1 `duration` dan `delay`

```js
gsap.to(".box", { x: 200, duration: 1.5 }); // animasi berjalan selama 1.5 detik
gsap.to(".box", { x: 200, delay: 0.5 }); // tunggu 0.5 detik dulu sebelum animasi MULAI
```

Satuan di GSAP itu **detik**, bukan milidetik (beda dengan CSS yang kadang pakai `ms`). Ini kesalahan umum pemula yang pindah dari CSS.

### 3.2 Easing — "gaya gerak" animasi

Bayangin gini: animasi tanpa easing itu kayak mobil yang jalan dengan kecepatan konstan dari awal sampai akhir — terasa kaku dan robotik. Easing itu yang bikin animasi berasa natural, seperti benda sungguhan yang punya percepatan dan perlambatan.

```js
gsap.to(".box", { x: 300, duration: 1, ease: "power2.out" }); // mulai cepat, pelan-pelan di akhir
gsap.to(".box", { x: 300, duration: 1, ease: "power2.in" }); // mulai pelan, cepat di akhir
gsap.to(".box", { x: 300, duration: 1, ease: "elastic.out(1, 0.3)" }); // efek "mantul" seperti karet
gsap.to(".box", { x: 300, duration: 1, ease: "bounce.out" }); // efek memantul seperti bola jatuh
gsap.to(".box", { x: 300, duration: 1, ease: "none" }); // linear, tanpa percepatan/perlambatan
```

**Pola nama easing:** kebanyakan easing punya akhiran `.in`, `.out`, atau `.inOut`:

- `.out` — paling sering dipakai untuk elemen yang MASUK ke layar (terasa natural "berhenti dengan lembut")
- `.in` — dipakai untuk elemen yang KELUAR dari layar
- `.inOut` — pelan di awal DAN di akhir, cepat di tengah

**Saran praktis:** jangan hafal semua nama easing dari dokumentasi. Buka **GSAP Ease Visualizer** (cari di gsap.com), coba-coba secara visual sampai ketemu yang "berasa pas" untuk animasi kamu. Di awal-awal, `power2.out` adalah pilihan aman untuk hampir semua kasus "elemen muncul".

### 3.3 Pengulangan: `repeat`, `yoyo`, `repeatDelay`

```js
gsap.to(".box", { x: 200, duration: 1, repeat: 3 }); // ulang 3 KALI TAMBAHAN (total 4x jalan)
gsap.to(".box", { x: 200, duration: 1, repeat: -1 }); // ulang SELAMANYA
gsap.to(".box", { x: 200, duration: 1, repeat: -1, yoyo: true }); // bolak-balik, bukan ngulang dari awal lagi
gsap.to(".box", { x: 200, duration: 1, repeat: -1, repeatDelay: 0.5 }); // jeda 0.5 detik tiap pengulangan
```

**Beda `repeat` tanpa `yoyo` vs dengan `yoyo`:** tanpa `yoyo`, animasi akan "lompat" balik ke posisi awal secara instan lalu mulai lagi. Dengan `yoyo: true`, animasi benar-benar jalan MUNDUR secara halus, baru maju lagi — ini yang biasanya diinginkan untuk efek "berdenyut" atau loading.

### 3.4 `stagger` — animasi beruntun untuk banyak elemen

```js
gsap.to(".item", { y: -20, duration: 0.5, stagger: 0.1 });
```

Kalau ada 5 elemen `.item`, `stagger: 0.1` membuat tiap elemen mulai animasi 0.1 detik setelah elemen sebelumnya — hasilnya efek "beruntun" yang enak dilihat, bukan 5 elemen bergerak bersamaan secara kaku.

**Stagger lanjutan (object), berguna untuk pola lebih kompleks:**

```js
gsap.to(".item", {
  y: -20,
  stagger: {
    each: 0.1, // jeda antar elemen
    from: "center", // mulai dari elemen TENGAH, menyebar ke kedua sisi (bisa juga 'start', 'end', 'random')
  },
});
```

---

## 💻 Latihan

### Latihan 1 — Easing Comparison

Buat 4 box sejajar. Animasikan keempatnya dengan `x: 300` secara bersamaan, tapi masing-masing pakai easing berbeda: `'none'`, `'power2.out'`, `'bounce.out'`, `'elastic.out(1, 0.3)'`. Jalankan dan amati perbedaan "rasa" gerakannya satu-satu.

### Latihan 2 — Efek Berdenyut (Pulse)

Buat satu box lingkaran (border-radius 50%). Buat animasi `scale` dari 1 ke 1.2 dengan `repeat: -1` dan `yoyo: true`, durasi pendek (0.6 detik). Ini pola yang sering dipakai untuk notification badge atau tombol "live".

### Latihan 3 — Stagger List (Wajib)

Buat `<ul>` dengan 6 `<li>` (boleh dari materi DOM Pertemuan 5, pakai `createElement` dari array data). Di CSS beri `opacity: 0` sebagai default. Animasikan SEMUA `.item` dengan `gsap.to()`: `opacity: 1`, `y: 0` (dari posisi awal `y: 20` lewat `.from()`), pakai `stagger: 0.15`. Hasilnya harus terlihat item muncul satu-satu berurutan dari atas ke bawah.

### Tantangan (Opsional)

Modifikasi Latihan 3, ganti `stagger: 0.15` jadi object dengan `from: 'center'`. Amati bedanya — animasi sekarang menyebar dari tengah daftar ke kedua ujung.

---

## ✅ Checklist Sebelum Lanjut

- [ ] Saya paham `duration`/`delay` pakai satuan detik, bukan milidetik
- [ ] Saya bisa menjelaskan kenapa easing bikin animasi terasa natural
- [ ] Saya paham beda `repeat` dengan dan tanpa `yoyo: true`
- [ ] Saya bisa pakai `stagger` untuk animasi beruntun tanpa lihat contoh

Kalau semua sudah dicentang → lanjut ke `04-Timeline`. Ini pertemuan paling penting di seluruh materi GSAP.
