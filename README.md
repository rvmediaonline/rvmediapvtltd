# Rv Media Online 🚀

> **India's #1 Algorithm-Driven Digital Marketing Agency**
> *"The Art of The Algorithm"*

A premium, full-stack marketing agency website built with React + Vite, featuring real 3D elements, Supabase backend, and one-click Vercel deployment.

---

## ✨ Features

### 🎨 Frontend
- **15 Sections** — Hero, Services, Stats, Process, Results, Industries, Testimonials, Pricing, Blog, CTA, Contact
- **Real 3D Elements** (Three.js / React Three Fiber) — animated geometric scenes in Hero, Services, and CTA
- **Framer Motion** animations throughout
- **Dark glassmorphism** UI with purple/cyan brand palette
- **Fully responsive** — mobile, tablet, desktop

### ⚙️ Backend (Supabase)
- **Contact Form** → saved to `contact_submissions` table with lead status tracking
- **Newsletter Subscriptions** → stored in `newsletter_subscribers`
- **Admin Dashboard** at `/admin` — view and manage leads with Supabase Auth
- **Database Tables** — blog_posts, testimonials, case_studies (CMS-ready)
- **Row Level Security** — public can insert, only authenticated admins can read

### 🚢 Deployment
- **GitHub** integration for version control
- **Vercel** auto-deployment on every push
- **SPA routing** — all routes work on Vercel refresh
- **SEO** — full meta tags, Open Graph, Twitter Card, canonical URLs

---

## 🗂 Project Structure

```
rv-media-online/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── 3d/              ← Three.js scenes
│   │   │   │   ├── Scene3DHero.tsx
│   │   │   │   ├── Scene3DServices.tsx
│   │   │   │   └── Scene3DCTA.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ContactSection.tsx  ← Supabase wired
│   │   │   ├── Footer.tsx          ← Newsletter wired
│   │   │   ├── LoadingScreen.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   └── PageTransition.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── ServicesPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   └── AdminPage.tsx       ← Lead dashboard
│   │   ├── App.tsx
│   │   └── routes.tsx
│   ├── hooks/
│   │   ├── useContactForm.ts       ← Supabase contact hook
│   │   └── useNewsletter.ts        ← Supabase newsletter hook
│   └── lib/
│       └── supabaseClient.ts       ← Typed Supabase client
├── supabase/
│   └── schema.sql                  ← Run this in Supabase SQL Editor
├── .env.example                    ← Copy to .env, add your keys
├── vercel.json                     ← Vercel SPA config
├── DEPLOYMENT.md                   ← Full deployment guide
└── package.json
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and add Supabase keys
cp .env.example .env

# 3. Start development server
npm run dev

# 4. Build for production
npm run build
```

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for the complete GitHub + Supabase + Vercel setup guide.

---

## 🔗 Pages

| Route | Description |
|-------|-------------|
| `/` | Home (all sections) |
| `/services` | Services + Process + CTA |
| `/contact` | Contact form page |
| `/admin` | Lead dashboard (Supabase auth required) |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 6 |
| Styling | Tailwind CSS v4 + Vanilla CSS |
| 3D | Three.js + React Three Fiber + Drei |
| Animation | Framer Motion |
| UI Components | Radix UI + shadcn/ui |
| Backend | Supabase (PostgreSQL + Auth) |
| Deployment | Vercel + GitHub |
| Icons | Lucide React |
| Fonts | Space Grotesk + Inter |

---

## 📞 Contact

**Rv Media Online** — Noida, Uttar Pradesh, India
- Phone: +91 9508786003
- Email: Info.rvmediaonline.com
- *The Art of The Algorithm*