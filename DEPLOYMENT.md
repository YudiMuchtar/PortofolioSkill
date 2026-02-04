# Deployment Guide

This guide will walk you through pushing your project to GitHub and deploying it to Vercel and Netlify.

## 1. Persiapan GitHub (GitHub Setup)

Sebelum deploy, kode Anda harus ada di GitHub.

### Langkah-langkah:
1.  **Login ke GitHub** dan buat repository baru (misal: `portoweb`).
    - *Jangan centang "Initialize with README", "formatted with .gitignore", atau license.*
2.  **Buka Terminal (VS Code)** di project Anda.
3.  Jalankan perintah berikut:

    ```bash
    # Inisialisasi git (jika belum)
    git init

    # Tambahkan semua file
    git add .

    # Commit pertama
    git commit -m "Initial commit - Portfolio Website"

    # Ubah branch ke main
    git branch -M main

    # Hubungkan ke repository GitHub Anda (GANTI URL DENGAN PUNYA ANDA)
    git remote add origin https://github.com/USERNAME_ANDA/portoweb.git

    # Push ke GitHub
    git push -u origin main
    ```

---

## 2. Deploy ke Vercel (Recommended for Next.js)

Vercel adalah pembuat Next.js, jadi integrasinya paling mulus.

### Langkah-langkah:
1.  Buka [vercel.com](https://vercel.com) dan login (bisa pakai akun GitHub).
2.  Klik **"Add New..."** -> **"Project"**.
3.  Di bagian "Import Git Repository", cari repo `portoweb` Anda dan klik **"Import"**.
4.  **Configure Project**:
    - **Framework Preset**: Next.js (Otomatis terdeteksi).
    - **Root Directory**: `./` (Default).
    - **Build Command**: `next build` (Default).
    - **Output Directory**: `.next` (Default).
5.  Klik **"Deploy"**.
6.  Tunggu sebentar, dan website Anda akan live!

---

## 3. Deploy ke Netlify

Netlify juga sangat bagus dan kami sudah menambahkan `netlify.toml` untuk konfigurasi otomatis.

### Langkah-langkah:
1.  Buka [netlify.com](https://netlify.com) dan login.
2.  Klik **"Add new site"** -> **"Import from Git"**.
3.  Pilih **GitHub**.
4.  Cari dan pilih repo `portoweb`.
5.  **Build Settings** (Seharusnya otomatis terisi dari `netlify.toml`):
    - **Build command**: `npm run build`
    - **Publish directory**: `.next`
6.  Klik **"Deploy portoweb"**.

---

## Troubleshooting

- **Error saat Build?**
  Pastikan perintah `npm run build` berjalan sukses di komputer lokal Anda sebelum push ke GitHub.
  
- **Gambar tidak muncul?**
  Pastikan file gambar ada di folder `public/` dan dipanggil dengan path absolut seperti `/image.png` (bukan `../public/image.png`).

---

**Selamat! Website portfolio Anda sudah online! 🚀**
