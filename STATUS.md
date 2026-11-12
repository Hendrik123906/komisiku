# STATUS — Kiroween 2026 / KomisiKu

**Update: 12 Nov 2026 ~12:55 WIB** (subagent Lane 1)

## ✅ SELESAI

### 1. Riset aturan resmi ( diverifikasi dari kiroween.devpost.com )
- Deadline submit: **Jumat, 4 Des 2026 14:00 PT = Sabtu, 5 Des 2026 05:00 WIB**
- Hadiah total **$100.000+**; Juara 1 **$30.000**, Juara 2 $20.000, Juara 3 $10.000;
  kategori masing-masing $5.000 (Resurrection, Frankenstein, Skeleton Crew,
  Costume Contest) + bonus (Startup $10.000, Student $1.500×4, Best Demo $1.000, dll.)
- Syarat: proyek **BARU** (dibangun 30 Okt–4 Des 2026), repo **GitHub publik** +
  lisensi open source + folder **`/.kiro` di root (wajib, jangan di-gitignore)**,
  URL app yang jalan, deskripsi, **video demo < 3 menit (YouTube, Public)**,
  write-up cara Kiro dipakai.
- Kategori dipilih: **Costume Contest** (app apa saja + UI Halloween yang polished).

### 2. App BARU selesai & terverifikasi — "KomisiKu" (Shopee Affiliate Tracker)
- Lokasi: `~/workspace/bounties/kiroween/` — **tidak menyentuh repo RozgarAI**.
- Stack: vanilla HTML/CSS/JS, tanpa dependensi, tanpa server, tanpa biaya.
- Fitur jalan: tambah link, catat klik/order, dashboard (klik/order/konversi/
  estimasi komisi), status payout (Rp10.000 / Rp500.000 → ShopeePay/bank),
  cari, export CSV, reset terkonfirmasi, data di localStorage.
- Verifikasi: `node --check app.js` OK; matematika komisi dites
  (Rp63.800 × 5% × 2 order = Rp6.380 ✓); halaman serve HTTP 200
  (index/app.js/styles.css); nol request eksternal saat load.
- `.kiro/` lengkap: steering (product/structure/tech) + spec lengkap
  (requirements/design/tasks) mengikuti alur spec-driven Kiro.
- Dokumen: README, LICENSE (MIT), .gitignore (tidak meng-ignore .kiro),
  VIDEO_SHOTLIST.md, CREDIT_FORM_GUIDE.md, STATUS.md ini.

### 3. Riset kredit gratis ( diverifikasi dari tab Resources + form )
- Form: https://forms.gle/ykuadfNyNdWdbJfH9 — 4.000 kredit, review 48 jam kerja.
- Minta sebelum **1 Des 2026 12:00 PT (= 2 Des 03:00 WIB)**; redeem sebelum 4 Des;
  hangus 31 Des 2026. Satu kali per peserta.
- **TEMUAN PENTING: kredit butuh verifikasi ID (Didit) — foto KTP/paspor +
  selfie wajah — dan nama profil Devpost harus sama persis dengan KTP.**
  Ini langkah user-only, tidak bisa diwakilkan agen.
- Panduan langkah-demi-langkah ada di CREDIT_FORM_GUIDE.md.

## ⛔ TERBLOKIR (butuh browser / user — subagent generik tidak bisa)

### A. Akun Kiro (https://app.kiro.dev)
- Signup butuh browser + verifikasi email (OTP ke bambanghendri71@gmail.com).
- **Butuh user/parent:** buka app.kiro.dev di browser, daftar, masukkan OTP.
- Setelah login: ambil **Kiro User ID** dari usage dashboard (di samping email).

### B. Registrasi Devpost + Credit Request Form
- Butuh: akun Devpost (nama = nama KTP persis) + Kiro User ID (dari A) +
  isi form https://forms.gle/ykuadfNyNdWdbJfH9 + verifikasi ID Didit (KTP + selfie).
- **Butuh user/parent** — semua langkah ini hanya bisa dari browser + HP user.

### C. Repo GitHub publik + deploy
- ✅ DONE 12 Nov 2026 ~14:34 WIB: repo publik https://github.com/Hendrik123906/komisiku
  (commit aeea800, `.kiro/` 6 file terlacak) + GitHub Pages hidup
  https://hendrik123906.github.io/komisiku/ (terverifikasi termuat, dashboard + form + payout).

### D. Video demo < 3 menit
- **JANGAN generate video AI — BLOCKED permanen di akun ini.**
- Shot list + naskah siap di VIDEO_SHOTLIST.md (~2:30, screen-record saat app jalan).
- **Butuh user/parent:** rekam layar + narasi, upload YouTube Public.

## ⚠️ KEJUJURAN — penting sebelum submit
- App ini dibangun mengikuti workflow spec-driven Kiro (spec + steering di
  `.kiro/`), TAPI **belum ada satu langkah kerja pun yang dijalankan di dalam
  Kiro** (IDE/CLI/Web) karena akun Kiro belum ada.
- Sebelum submit Devpost, **wajib** ada minimal satu langkah nyata di Kiro:
  buka repo ini di Kiro (Web/IDE) dan minta Kiro mengerjakan satu tugas dari
  spec (mis. review atau tambah fitur), lalu tulis dengan jujur di README
  bagian "How Kiro was used" apa yang Kiro lakukan.
- **Jangan** centang/mengklaim pemakaian Kiro yang tidak terjadi — itu
  pernyataan palsu dan bisa mendiskualifikasi submission.

## 📅 Timeline sisa
- Sekarang → 1 Des: buat akun Kiro + Devpost + minta kredit (butuh user)
- 1–3 Des: push GitHub + deploy + rekam video + submit draft Devpost
- **Deadline: 5 Des 2026 05:00 WIB**
