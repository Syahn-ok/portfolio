# Portfolio — Setup Guide

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Personalise It

### Your Name & Headline
Edit `src/components/Hero.jsx`:
- Line with `<span className="grad">Your</span>` → replace with your first name
- Line with `<span className="grad">Name.</span>` → replace with your last name
- Change `"YN."` in `Nav.jsx` and `Footer.jsx` to your initials

### Content (projects, skills, awards)
All content lives in **`src/data.js`** — one file, everything:
- `skills` — object of category → array of tech names
- `projects` — array of project objects
- `awards` — array of award objects

### Email & Links
In `src/components/Contact.jsx`:
- Replace `hello@yourname.dev` with your actual email (both the `href` and the visible text)

In `Contact.jsx` socials array and `projects` links in `data.js`:
- Replace `'#'` with real URLs

### Photo
Your photo is already embedded. To swap it later:
1. Run: `base64 -w 0 your-photo.jpg > encoded.txt`
2. Open `src/assets/photo.js`
3. Replace the base64 string with the contents of `encoded.txt`

### Accent Color
In `src/index.css`, change `--accent: #8355F6;` to any color you like.
The whole theme follows from that one variable.

---

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. Deploy to Vercel, Netlify, or GitHub Pages.

### Deploy to Vercel (recommended, free)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
Drag the `dist/` folder to app.netlify.com/drop.

---

## Project Structure

```
src/
├── App.jsx              # Root — imports all sections
├── main.jsx             # React entry point
├── index.css            # All styles + CSS variables
├── data.js              # All your content (edit this)
├── animations.js        # Framer Motion variants (shared)
├── assets/
│   └── photo.js         # Your photo (base64)
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Awards.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── hooks/
    ├── useTypewriter.js  # Animated typing effect
    └── useReveal.js      # Scroll-triggered visibility
```
