# ⚡ SUPER COMPRESS

> **A fast, lightweight, and 100% client-side Web Application for compressing PDFs & Images.**

[![Vercel](https://img.shields.io/badge/Deployed%20with-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**SUPER COMPRESS** is a privacy-first, web-based utility tool designed to compress PDF documents and image files (JPG, PNG, WebP) directly inside your web browser. Zero server uploads, maximum data confidentiality.

---

## ✨ Key Features

- 🔒 **100% Private & Client-Side Processing**  
  All file compression operations run locally using your device's CPU and browser memory. Your sensitive files never leave your computer.
- 📄 **Advanced PDF Compression & Manipulation**  
  Supports PDF size optimization, PDF merging, and page splitting/extraction.
- 🖼️ **Image Optimization & Conversion**  
  Compress JPG, PNG, and WebP images or convert multiple images into a single combined PDF.
- 📦 **Batch Compression to ZIP**  
  Compress multiple files simultaneously and download them packaged neatly inside a `.zip` archive.
- 👁️ **Live Visual Document Preview**  
  Built-in sidebar preview featuring document canvas rendering and interactive zoom controls.
- 🎨 **Modern & Responsive UI**  
  Crafted with Tailwind CSS, featuring dark-mode aesthetics, dynamic progress indicators, drag-and-drop uploads, and clipboard paste support (`Ctrl+V`).

---

## 🛠️ Built With

Built pure and lightweight using modern vanilla web technologies:

- **[Tailwind CSS](https://tailwindcss.com/)** - UI Styling & Responsive Layouts
- **[PDF.js](https://mozilla.github.io/pdf.js/)** - Rendering & Visualizing PDF pages
- **[pdf-lib](https://pdf-lib.js.org/)** - Building & Manipulating PDF structures
- **[browser-image-compression](https://github.com/Donaldcwl/browser-image-compression)** - Client-side image compression engine
- **[JSZip](https://stuk.github.io/jszip/)** - Client-side ZIP archive generation

---

## 🚀 How to Use

1. Open the **SUPER COMPRESS** web application.
2. Select your desired utility tool (**Compress PDF**, **Merge PDF**, **Split PDF**, **Compress Image**, or **Image to PDF**).
3. Set your target output file size or quality parameters.
4. Drag and drop your files, click to browse, or paste directly from your clipboard (`Ctrl+V`).
5. Click **Process Now** to run the local compression.
6. Preview the output file using the interactive previewer and click **Download File**!

---

## 💻 Local Development

Because this project runs purely on client-side JavaScript, no backend server or Node.js environment setup is required:

1. **Clone this repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/super-compress.git](https://github.com/YOUR_USERNAME/super-compress.git)
