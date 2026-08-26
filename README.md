# Unitech Garage — Landing Page

Stack: Vite + Tailwind CSS + GSAP (vanilla JS, tanpa framework UI).

## Struktur

```
unitech-garage/
├── index.html                  # entry HTML, cuma kerangka <section> kosong
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── public/
│   └── robots.txt
└── src/
    ├── css/
    │   └── main.css            # Tailwind directives + base style
    └── js/
        ├── main.js             # inisialisasi semua section + animasi
        ├── animations.js       # GSAP ScrollTrigger, dipakai lewat data-animate
        ├── data/
        │   └── content.js      # SEMUA teks/konten site, edit di sini saja
        └── sections/
            ├── header.js
            ├── hero.js
            ├── about.js
            ├── services.js
            ├── why-us.js
            ├── gallery.js
            ├── location.js
            ├── contact.js
            └── footer.js
```

## Cara jalan

```bash
npm install
npm run dev       # dev server, hot reload
npm run build      # build production ke /dist
npm run preview    # preview hasil build
```

## Prinsip maintenance

- **Ganti teks/harga/alamat** → edit `src/js/data/content.js` saja, jangan sentuh file `sections/*.js`.
- **Tambah section baru** → buat file baru di `src/js/sections/`, tambahkan `<section id="...">` di `index.html`, import & panggil di `main.js`.
- **Tambah animasi baru** → tambahkan atribut `data-animate="fade-up"` di elemen HTML yang di-render, `animations.js` akan otomatis meng-handle lewat `ScrollTrigger`. Kalau butuh jenis animasi lain, tambahkan varian baru di `animations.js`.
- **Gambar** → taruh di `src/assets/img/` untuk yang diproses Vite, atau `public/` untuk file statis yang di-serve apa adanya (favicon, robots.txt, dll).

## Deploy ke VPS (fase statis)

1. `npm run build` → hasil di folder `dist/`.
2. Upload isi `dist/` ke VPS (misalnya `/var/www/unitech-garage`).
3. Serve dengan Nginx sebagai static file server, arahkan domain ke folder tersebut.
4. (Opsional) pasang SSL via Certbot.

## Rencana ke depan — admin panel & fitur dinamis

Saat ada fitur yang butuh data dinamis (misalnya galeri di-update dari dashboard, bukan edit kode), rencana migrasinya:

1. Buat backend terpisah (Node/Express + SQLite atau Postgres) yang expose REST API sederhana (mis. `GET /api/gallery`, `POST /api/gallery` dengan auth admin).
2. Landing page ini tetap statis — hanya section yang butuh data dinamis (galeri, harga, dsb.) diubah untuk `fetch()` dari API tersebut saat runtime, bukan hardcode di `content.js`.
3. Admin panel dibangun sebagai aplikasi terpisah (bisa mulai dari halaman admin sederhana dengan auth basic) yang konsumsi API yang sama.
4. Frontend publik dan admin panel di-deploy terpisah, sehingga landing page tetap ringan dan cepat meskipun fitur admin berkembang.

Pendekatan ini sengaja dipilih supaya fase sekarang (landing page statis) tidak perlu di-rombak total saat fitur admin benar-benar dipesan client — cukup ditambah, bukan diganti.
