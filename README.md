# 🎨 Portfolio Template

Template portfolio modern berbasis React.js + Vite. Didesain dengan tampilan clean, elegan, dan siap pakai.

---

## 🚀 Cara Menggunakan Template Ini

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

---

## 📝 Daftar Customisasi (Cari semua `TODO` di codebase)

### 🔑 Data Utama — `src/data/portfolioData.js`
Ubah semua field sesuai data kamu:
```js
export const portfolioData = {
  name: "Your Name",
  role: "Fullstack Developer",
  email: "yourname@email.com",
  phone: "+62 812-3456-7890",
  location: "Your City, Country",
  whatsapp: "628123456789",   // Format internasional tanpa +
  cvFile: "/CV_YourName.pdf", // Letakkan CV di folder /public
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    instagram: "https://instagram.com/yourusername",
    email: "mailto:yourname@email.com",
    website: "https://yourwebsite.com",
  },
  // ...
};
```

---

### 🦸 Hero Section — `src/components/sections/Hero.jsx`
| Apa | Cara |
|---|---|
| Nama di navbar kiri | Ubah `Name.` di baris `<motion.a href="/"` |
| Role badge | Ubah `Full-Stack Web Developer` |
| Deskripsi singkat | Ubah teks `Specializing in...` |
| Social links (GitHub, LinkedIn, dll) | Ubah array `socialLinks` |
| Nomor WhatsApp Hire Me | Ubah `WHATSAPP_NUMBER` |
| Tombol Website | Ubah `href` dan teks tombol ke-3 |

---

### 👤 About Section — `src/components/sections/About.jsx`
| Apa | Cara |
|---|---|
| Foto profil | Ganti `src/assets/profile.jpg` dengan foto kamu |
| Nama & bio | Ubah paragraph di sekitar `Your Name` |
| Jurusan & universitas | Ubah bagian Education card |
| Lokasi, telepon, email | Ubah array di sekitar `Your City, Country` |
| File CV | Letakkan file di `/public/CV_YourName.pdf` dan ubah href |
| He/Him pronoun | Ubah tag `He/him` sesuai |

---

### 💼 Experience Section — `src/components/sections/Experience.jsx`
Ubah array `experiences` dengan data pengalaman kerja kamu:
```js
const experiences = [
  {
    title: "Nama Posisi Kamu",
    company: "Nama Perusahaan",
    period: "Jan 2024 - Mar 2024",
    description: "Deskripsi pekerjaan kamu...",
    achievements: [
      "Pencapaian #1",
      "Pencapaian #2",
    ],
    icon: FaBriefcase
  },
];
```

---

### 🖥️ Projects Section — `src/components/sections/Projects.jsx`
1. Taruh screenshot project di `src/assets/`
2. Import gambar di bagian atas file
3. Ubah array `projects` dengan data project kamu

```js
import project1 from "../../assets/project1.png";

const projects = [
  {
    title: "Nama Project",
    description: "Deskripsi project...",
    image: project1,
    tech: ["React", "Laravel", "MySQL"],
    liveUrl: "https://project-demo.com", // atau null
    accent: "#1a1aff",
    accentBg: "#e8e8ff",
  },
];
```

---

### 📬 Contact Section — `src/components/sections/Contact.jsx`
| Apa | Cara |
|---|---|
| Nomor WhatsApp | Ubah `WHATSAPP_NUMBER` |
| Social links | Ubah array `socialLinks` |
| Info kontak | Ubah array `contactInfo` (email, phone, location) |

---

## 📁 Struktur Project
```
src/
├── assets/          → Gambar (foto profil, screenshot project)
├── components/
│   ├── Layout/      → Layout wrapper
│   ├── sections/    → Setiap section halaman
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   └── ui/          → Komponen UI reusable
├── data/
│   └── portfolioData.js  → Data utama portfolio
└── hooks/           → Custom React hooks

public/
└── CV_YourName.pdf  → File CV kamu (opsional)
```

---

## 🛠️ Tech Stack
- **Framework**: React.js + Vite
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Styling**: Vanilla CSS + Inline Styles
- **Font**: Playfair Display + DM Sans (Google Fonts)

---

## 📦 Build Production
```bash
npm run build
```

> Hasil build ada di folder `dist/` — siap di-deploy ke Netlify, Vercel, atau hosting manapun.
"# portofolio_v4" 
