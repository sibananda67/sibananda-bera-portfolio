# Sibananda Bera — Digital Systems Architect Portfolio

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Live, interactive personal portfolio of **Sibananda Bera** — Digital Systems Architect specializing in web development, multi-vendor e-commerce platforms, n8n workflow automations, CRM operations, and third-party API integrations (Cashfree, Shiprocket, ZeptoMail, Google Workspace).

---

## 🌟 Highlights

- **Interactive System Architecture Map**: Dynamic visual topology diagram showing data flows across UI, APIs, n8n automation engines, databases, and operational dashboards.
- **Automation Lab & Pipeline Generator**: Interactive workflow builder simulating real-time business pipelines (Lead capture &rarr; Data validation &rarr; AI personalization &rarr; SMTP dispatch &rarr; CRM synchronization).
- **SB AI Portfolio Intelligence**: Contextual portfolio assistant with smart fallbacks:
  - **`SB AI • DEMO MODE`** (default): Runs 100% client-side with pre-compiled project knowledge, architectural case studies, and instant responses. **No API keys or backend servers required.**
  - **`SB AI • AI ACTIVE`**: Dynamically active when paired with a secure Gemini backend service.
- **Project Showcase**: In-depth operational breakdowns of IngrediaMart, Seller Outreach Automation, Telecaller CRM & Operations Board, and Logistics & Payment Bridges.
- **Interactive Resume Modal**: Structured printable view of technical skills, work history, and achievements.
- **Theme Switcher**: Fluid transitions between futuristic dark mode and crisp high-contrast light mode.
- **Verified Direct Links**: Direct links to Sibananda's verified LinkedIn profile, GitHub, and email.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.react.dev/)
- **Optional Backend**: [Express](https://expressjs.com/) proxy for secure Gemini AI calls

---

## 🚀 Quick Start & Local Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` (comes with Node.js) or `pnpm` / `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/sibananda-bera-portfolio.git
cd sibananda-bera-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

You have two development options:

#### Option A: Full-stack (Default, includes backend API proxy)
```bash
npm run dev
```
Runs at `http://localhost:3000`.

#### Option B: Client-only Static Mode (Pure Vite)
```bash
npm run dev:static
```
Runs the client app directly via Vite at `http://localhost:5173`.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This compiles:
1. All client-side HTML, CSS, JavaScript, and static assets into the `dist/` directory.
2. A bundled, self-contained server runtime in `dist/server.cjs` (if hosting on Node/Cloud Run).

If deploying to a purely static web host (such as GitHub Pages or Cloudflare Pages), you can also run:
```bash
npm run build:static
```

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

This project can be deployed anywhere as a **static Single-Page Application (SPA)** or as a **Node.js application**. **No API keys are required to build, preview, or deploy.**

### 1. GitHub Pages

1. Push your repository to GitHub.
2. In your repository on GitHub, go to **Settings &rarr; Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Create `.github/workflows/deploy.yml` with the following workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build:static

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist/

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> **Note for GitHub Pages sub-paths**: If your repository name is `username.github.io/repo-name`, add `base: '/repo-name/'` to `vite.config.ts`.

---

### 2. Vercel

1. Import your GitHub repository on [vercel.com](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build:static` (or `npm run build`)
4. Output Directory: `dist`
5. Click **Deploy**.

For clean client-side routing on Vercel, a `vercel.json` rewrite is pre-configured or you can add:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

### 3. Netlify

1. Connect your repository on [netlify.com](https://www.netlify.com).
2. Build command: `npm run build:static`
3. Publish directory: `dist`
4. For client-side routing, add a `_redirects` file in `public/` containing:
   ```
   /*    /index.html   200
   ```
5. Click **Deploy**.

---

### 4. Firebase Hosting

The repository already includes `firebase.json` pre-configured with SPA rewrite rules:

```bash
# 1. Install Firebase CLI (if not already installed)
npm install -g firebase-tools

# 2. Log in
firebase login

# 3. Initialize hosting (select existing Firebase project or create one)
firebase init hosting
# - Public directory: dist
# - Configure as a single-page app: Yes
# - Set up automatic builds and deploys with GitHub: Optional

# 4. Build and deploy
npm run build:static
firebase deploy --only hosting
```

---

### 5. Cloudflare Pages

1. In the Cloudflare Dashboard, navigate to **Workers & Pages** &rarr; **Create application** &rarr; **Pages** &rarr; **Connect to Git**.
2. Select your repository.
3. Framework preset: **Vite**
4. Build command: `npm run build:static`
5. Build output directory: `dist`
6. Click **Save and Deploy**.

---

## 🔐 Environment Variables

**No environment variables are required.** The site runs in full operational capacity out of the box.

Optional environment variables:

| Variable | Scope | Description |
| :--- | :--- | :--- |
| `GEMINI_API_KEY` | Server-side only | Enables dynamic Gemini AI responses via backend `/api/ai/*`. When omitted, SB AI runs in verified **Demo Mode**. |
| `VITE_GA_MEASUREMENT_ID` | Client-side (`VITE_` prefix) | Optional Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`). When omitted, analytics is cleanly disabled. |

To use optional variables locally, copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

---

## 📁 Project Structure

```
├── public/                 # Static assets (favicon.svg, og-image.svg, robots.txt, sitemap.xml)
├── src/
│   ├── components/         # React UI modules
│   │   ├── AIPortfolioAssistant.tsx   # Floating interactive AI assistant (Demo / Active mode)
│   │   ├── AIProjectExplainerModal.tsx # Project architecture deep dive modal
│   │   ├── AIResumeAssistant.tsx      # Interactive resume query assistant
│   │   ├── AskPortfolioSearch.tsx     # Portfolio-wide natural language search
│   │   ├── AutomationLab.tsx          # Interactive n8n automation pipeline builder
│   │   ├── ContactSection.tsx         # Contact form, direct email, and verified links
│   │   ├── Footer.tsx                 # Site footer with section links
│   │   ├── Hero.tsx                   # Interactive hero section with live node network
│   │   ├── LinkedInButton.tsx         # Verified LinkedIn button with animations & Easter eggs
│   │   ├── Navigation.tsx             # Sticky navbar, resume trigger & theme toggle
│   │   ├── NotFoundPage.tsx           # Custom 404 error page
│   │   ├── ProjectShowcase.tsx        # Project gallery & architecture case studies
│   │   ├── ResumeModal.tsx            # Printable structured resume modal
│   │   ├── SkillsSection.tsx          # Categorized technical competencies
│   │   ├── SystemArchitectureMap.tsx  # Interactive visual system topology map
│   │   └── ThemeToggle.tsx            # Dark/light mode switcher
│   ├── data/
│   │   └── portfolioData.ts           # Central source of truth for projects, skills & profile
│   ├── services/
│   │   └── aiService.ts               # Resilient AI service with graceful Demo Mode fallbacks
│   ├── utils/
│   │   └── analytics.ts               # Opt-in Google Analytics 4 utility
│   ├── App.tsx                        # Main application layout & section anchors
│   ├── main.tsx                       # Entry point & root render
│   └── index.css                      # Tailwind CSS v4 styling & theme tokens
├── .env.example            # Documented optional environment variables
├── .gitignore              # Ignored files (node_modules, dist, .env, etc.)
├── firebase.json           # Firebase Hosting configuration with SPA rewrites
├── metadata.json           # Application metadata & platform settings
├── package.json            # Scripts & project dependencies
├── server.ts               # Optional Express development & production server
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 📬 Contact & Links

- **LinkedIn**: [https://www.linkedin.com/in/shibananda-bera-4683052a1/](https://www.linkedin.com/in/shibananda-bera-4683052a1/)
- **Email**: [sibanandabera8114@gmail.com](mailto:sibanandabera8114@gmail.com)
- **GitHub**: [https://github.com/sibanandabera](https://github.com/sibanandabera)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
