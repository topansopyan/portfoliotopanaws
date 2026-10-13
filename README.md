# Topan Sopyan — Personal Portfolio

A modern, dark, futuristic personal portfolio for **Topan Sopyan** — Web
Developer, Full-Stack AI Engineer, and Educator. Built as a 100% client-side
site with plain **HTML, CSS, and JavaScript** — no backend, no API calls, no
build step. Just open it in a browser.

![Tech](https://img.shields.io/badge/HTML-CSS-JS-6c5ce7)

## ✨ Features

- **Single-page scroll** with sticky navigation that jumps to each section
- **Animated gradient background** with drifting glow blobs + interactive particle field
- **Glassmorphism cards** with soft glowing accent borders on hover
- **Hero section** with a live typewriter effect, animated badge, floating profile card, and CTAs
- **Scroll-reveal animations** (IntersectionObserver) and animated statistic counters
- **Scrollspy** active-link highlighting and a top scroll-progress bar
- **Fully responsive** — Mobile, Tablet, and Desktop with a slide-in mobile menu
- **Accessible**: respects `prefers-reduced-motion`, uses semantic markup and ARIA labels
- **Data-driven** skills and projects (edit one file, no markup changes)
- **Printable resume** page (print / save as PDF from the browser)

## 📁 Project Structure

```
portfolioaws/
├── index.html            # Single-page entry point (all sections)
├── README.md
├── components/           # Reusable component docs + pattern
│   └── README.md
├── pages/                # Section/page map documentation
│   └── README.md
├── assets/               # Static assets
│   ├── profil.png        # Profile photo (hero)
│   ├── resume.html       # Printable resume
│   └── README.md
├── css/
│   ├── variables.css     # Design tokens (colors, fonts, spacing)
│   ├── base.css          # Reset, background, reveal helpers
│   ├── components.css     # Buttons, cards, badges, chips
│   ├── layout.css        # Navbar, hero, sections, footer
│   └── responsive.css    # Tablet & mobile breakpoints
└── js/
    ├── data.js           # SITE_DATA — content source of truth
    ├── components.js     # DOM factory functions (SkillCard, ProjectCard)
    └── main.js           # Effects: typewriter, reveal, counters, particles
```

## 🚀 Getting Started

No install or build needed — it's pure client-side.

**Option A — open directly**
Double-click `index.html`.

**Option B — local server (recommended for best behavior)**

```bash
# Python 3
python -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## 🛠️ Customization

- **Content** — edit `js/data.js` (`SITE_DATA`) to change the typewriter roles,
  skills, and projects. Cards render automatically.
- **Colors / theme** — tweak the tokens in `css/variables.css`.
- **Profile photo** — see `assets/README.md` to swap the "TS" placeholder for a
  real image.
- **Resume** — edit `assets/resume.html`.

## 📬 Contact

- Email: topan821@guru.sma.belajar.id
- Phone: 081298023889
- Portfolio: https://www.topansopyan.blog
- GitHub: https://github.com/topansopyan
- LinkedIn: https://www.linkedin.com/in/topan-sopyan
- Instagram: https://www.instagram.com/topansopyan

---

© Topan Sopyan — Karawang, Indonesia.
