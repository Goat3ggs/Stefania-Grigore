# Grigore Stefania - Personal Portfolio Website

A personal Frontend Developer portfolio built from scratch to showcase modern, interactive, and highly optimized web interfaces. This project highlights a strong foundation in core web technologies and clean code architecture.

### 🔗 Live Demo

[https://stefania-grigore.netlify.app/]

---

## ✨ Key Features

- **Premium Design (Dark Theme & Glassmorphism):** Modern interface utilizing subtle textures (`mix-blend-mode`), blur effects, radial lighting (mesh gradients), and smooth transitions.
- **Modular CSS Architecture:** Clean and maintainable styling based on the BEM methodology, split into logical components (hero, about, projects, footer, header) and orchestrated via global CSS variables.
- **Responsive & Mobile-First:** Fluid typography using `clamp()`, alongside Flexbox and CSS Grid, ensuring a flawless layout across all screen sizes.
- **Optimized JavaScript Logic:**
  - Custom accordion system for the "Work" section, dynamically rendering HTML components from a dedicated data file (`projectsData.js`).
  - Native DOM manipulation for complex behaviors (automatic Sticky Header, smooth scrolling, mobile burger menu).
  - Dynamic tooltips for the technical skills section, fetching assets iteratively via CDN (Devicons).
- **High Performance:** Powered by Vite for lightning-fast local development and highly optimized production builds.

---

## 🛠️ Tech Stack

- **Structure & Content:** Semantic HTML5
- **Styling:** CSS3 (Flexbox, Grid, `@keyframes` animations, `cubic-bezier` transitions)
- **Logic & Interactivity:** Vanilla JavaScript (ES6+)
- **Tooling & Bundling:** Vite
- **Design Assets:** Devicons CDN, Font Awesome, Unsplash (Textures)

---

## 📂 Project Structure

```text
├── public/                 # Public assets (favicon, CV.pdf)
├── src/
│   ├── assets/             # Local images and icons
│   ├── css/                # Separate CSS modules
│   │   ├── reset.css       # CSS baseline resets
│   │   ├── variables.css   # Colors, fonts, sizes (Root variables)
│   │   ├── header.css      # Navigation and mobile menu
│   │   ├── hero.css        # Main section (Hero)
│   │   ├── about.css       # About Me & Skills section
│   │   ├── projects.css    # Projects list (Accordion UI)
│   │   └── footer.css      # Footer and contact section
│   ├── main.js             # Main logic (DOM Events, Rendering)
│   ├── projectsData.js     # Projects data (Array of Objects)
│   └── style.css           # Main CSS file (Imports)
├── index.html              # Page structure
├── package.json            # Dependencies and scripts (Vite)
└── README.md               # Project documentation
```
