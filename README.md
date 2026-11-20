# Undangan Pernikahan Premium + Multi Template + Musik

## Fitur
- 20.000 variasi desain generator (kombinasi palet warna, font, layout, ornamen, dan foto cover) plus template custom.
- Dashboard untuk membuat banyak undangan, edit, draft/publish, hapus.
- Tambah template custom sendiri: nama, gaya dasar, warna utama, warna aksen, foto cover.
- Setiap undangan memiliki template dan musik sendiri.
- URL musik MP3/audio HTTPS dan tombol play/pause.
- Countdown, galeri, Google Maps, RSVP WhatsApp.
- Supabase Auth + Row Level Security: user hanya mengelola undangannya sendiri.

## Setup Supabase
1. Buat project di https://supabase.com/
2. Buka SQL Editor dan jalankan seluruh `supabase-premium-schema.sql`.
3. Authentication > Providers > Email, aktifkan Email. Buat akun melalui halaman admin.
4. Project Settings > API, salin Project URL dan anon/publishable key ke `config.js`.
5. Jangan gunakan service_role/secret key di frontend.
6. Untuk membatasi pendaftaran, atur kebijakan Signups di Supabase Auth settings.

## Deploy GitHub Pages
Aktifkan Settings > Pages > Deploy from a branch > main > /(root).

- Dashboard: `https://USERNAME.github.io/REPO/admin.html`
- Undangan: `https://USERNAME.github.io/REPO/?slug=slug-undangan`

## Musik
Masukkan URL file audio publik HTTPS (misalnya file `.mp3`). File audio harus dapat diakses tanpa login. Browser HP umumnya melarang autoplay bersuara; musik dicoba mulai setelah tamu menekan tombol "Buka Undangan". Tombol musik akan muncul untuk play/pause.
Gunakan musik original, berlisensi, atau public domain yang boleh dipakai.

## Koleksi 20.000 desain\nKatalog dibuat secara lokal oleh `template-catalog.js`. Dashboard menampilkan hasil dengan pencarian, filter kategori, dan pagination (36 desain per halaman), sehingga tidak merender 20.000 kartu sekaligus. Ini adalah 20.000 variasi kombinasi desain, bukan 20.000 file HTML terpisah.\n\n## Template custom
Dashboard > Koleksi Template > Tambah template. Template custom menyimpan nama, palet warna, gaya dasar, dan URL background cover. Template ini dapat dipilih saat membuat/edit undangan.
