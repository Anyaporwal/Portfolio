## Professional React + Tailwind Portfolio

This is a production-ready personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **JavaScript**. It is optimized for modern browsers, responsive on all devices, and ready to deploy to **Netlify** or **Vercel**.

### Features

- **Modern UI**: Clean, dark-first design with subtle gradients, micro-interactions, and hover states.
- **Fully responsive**: Works across mobile, tablet, and desktop.
- **Sections**: Hero, About, Tech Stack, Projects, Education, Extras, Contact, and Footer.
- **Dark/Light support**: Theme toggle using Tailwind `dark` mode.
- **Animated skills**: Progress bars for tech and soft skills.
- **Smooth UX**: Smooth scrolling navigation and scroll-to-top button.
- **Custom cursor**: AI-inspired, glowing cursor that tracks the mouse.
- **Contact form**: Email form wired for Formspree (replace with your own Form ID).
- **SEO**: Basic meta tags in `index.html` for better discoverability.

---

### 1. Getting started

#### Install dependencies

From the `Portfolio` folder:

```bash
npm install
```

#### Run the dev server

```bash
npm run dev
```

Then open the printed URL (usually `http://localhost:5173`) in your browser.

---

### 2. Build for production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

### 3. Deploying

You can deploy the `dist` folder output to any static host.

- **Netlify**
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Node version: any recent LTS (e.g. 18+)

- **Vercel**
  - Framework preset: **Vite**
  - Build command: `npm run build`
  - Output directory: `dist`

You can also run:

```bash
npm run build
```

and connect the repository to Netlify or Vercel – they will detect the config automatically.

---

### 4. Customization checklist

Update these values to make the portfolio truly yours:

- **Name, role, and tagline**
  - `index.html` title and meta description.
  - `Hero.jsx` (`Your Name`, role, and copy).
  - `Navbar.jsx` initials and name.

- **Links**
  - `Navbar.jsx`, `Hero.jsx`, `Contact.jsx`:
    - GitHub, LinkedIn, Twitter, email.
  - `Contact.jsx`:
    - Replace `youremail@example.com` and social URLs.

- **Projects**
  - `Projects.jsx`: Replace demo links, GitHub URLs, descriptions, and tech stack arrays with your own projects.

- **Education, awards, extras**
  - `About.jsx`, `Education.jsx`, `Extras.jsx`: Fill in your real education history, certificates, achievements, and optional blog links.

- **Resume**
  - Put your PDF resume (e.g. `Your-Name-Resume.pdf`) in the `public` folder.
  - Update the `href` in `Contact.jsx` if you change the filename.

- **Formspree contact form**
  - Create a new form at Formspree.
  - Replace `https://formspree.io/f/your-form-id` in `Contact.jsx` with your actual Formspree endpoint.

---

### 5. Tech stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Icons**: `react-icons`
- **Tooling**: PostCSS, Autoprefixer

---

### 6. Structure

- `src/App.jsx` – main layout, theme, and custom cursor.
- `src/components/*` – each section is a composable React component.
- `src/hooks/useTheme.js` – dark/light theme toggle persisted in `localStorage`.
- `src/hooks/useScrollReveal.js` – intersection observer for scroll-in animations.
- `src/index.css` – Tailwind imports and global styles (scroll, cursor, reveal).

Feel free to refactor structure or components to match your own preferences or coding style.

