# Rv Media Online — Complete Deployment Guide

## Step 1: Install Node.js

1. Go to **https://nodejs.org**
2. Download **Node.js LTS** (v20 or higher)
3. Run the installer, click Next → Next → Install
4. **Restart your terminal/VS Code** after install
5. Verify: open a new terminal and type:
   ```
   node --version   → should show v20.x.x
   npm --version    → should show 10.x.x
   ```

---

## Step 2: Install Dependencies & Test Build

Open a terminal **inside the project folder**:

```bash
# Install all dependencies (Three.js, Supabase, etc.)
npm install

# Test it runs locally
npm run dev
```

Open http://localhost:5173 — you should see the site with 3D elements.

```bash
# Test the production build
npm run build
```

✅ If build succeeds with no errors, you're ready to deploy.

---

## Step 3: Create GitHub Repository

### Option A — GitHub Desktop (easiest)
1. Download **GitHub Desktop** from https://desktop.github.com
2. Sign in with your GitHub account
3. Click **File → Add Local Repository**
4. Browse to: `C:\Users\Luno Renewable Ltd\Downloads\Create Rv Media Online Website`
5. Click **Add Repository** (it will ask to initialize — click **Initialize**)
6. Click **Publish Repository** (top bar)
   - Name: `rv-media-online`
   - Keep private or make public
7. Click **Publish Repository** ✅

### Option B — Git via Terminal
```bash
git init
git add .
git commit -m "Initial commit — Rv Media Online with 3D + Supabase"
```
Then go to https://github.com/new, create a repo, copy the remote URL and run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/rv-media-online.git
git branch -M main
git push -u origin main
```

---

## Step 4: Set Up Supabase

1. Go to **https://supabase.com** → Sign up / Log in
2. Click **New Project**
   - Name: `rv-media-online`
   - Database Password: (save this!)
   - Region: **South Asia (Mumbai)** — closest to India
3. Wait ~2 minutes for project to initialize
4. Go to **SQL Editor** (left sidebar)
5. Click **New Query**, paste the entire contents of `supabase/schema.sql`
6. Click **Run** ✅ — all 5 tables will be created

### Get Your API Keys
1. Go to **Project Settings → API** (left sidebar gear icon)
2. Copy:
   - **Project URL** → looks like `https://abcdefgh.supabase.co`
   - **anon/public key** → long JWT token

### Create .env File
Create a file named `.env` in the project root (same folder as package.json):
```
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```
> ⚠️ Never commit `.env` to GitHub — it's already in `.gitignore`

### Enable Supabase Auth (for Admin Panel)
1. Go to **Authentication → Users** in Supabase dashboard
2. Click **Add User → Create New User**
3. Enter your email + a strong password
4. This account is used to log in at `/admin` on your website

---

## Step 5: Deploy to Vercel

### Connect GitHub to Vercel
1. Go to **https://vercel.com** → Sign up with GitHub
2. Click **Add New → Project**
3. Find your `rv-media-online` repository → click **Import**
4. Vercel auto-detects Vite ✅

### Configure Build Settings (should auto-fill)
| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

### Add Environment Variables
Click **Environment Variables** section and add:
| Key | Value |
|-----|-------|
| `VITE_SUPABASE_URL` | `https://yourproject.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | `your-anon-key` |

5. Click **Deploy** 🚀

Vercel will build and give you a URL like: `https://rv-media-online.vercel.app`

---

## Step 6: Add Custom Domain (Optional)

1. In Vercel dashboard → your project → **Settings → Domains**
2. Click **Add Domain** → enter `rvmediaonline.com`
3. Copy the DNS records shown and add them to your domain registrar
4. Wait 5–30 minutes for DNS propagation ✅

---

## Future Deployments (Automatic!)

After this setup, every time you push code to GitHub:
- Vercel **automatically rebuilds and redeploys** within ~60 seconds
- No manual steps needed

```bash
# Make changes, then:
git add .
git commit -m "your change description"
git push
# → Vercel auto-deploys! ✅
```

---

## Your URLs

| Page | URL |
|------|-----|
| Home | `https://rv-media-online.vercel.app/` |
| Services | `https://rv-media-online.vercel.app/services` |
| Contact | `https://rv-media-online.vercel.app/contact` |
| Admin Dashboard | `https://rv-media-online.vercel.app/admin` |

---

## Troubleshooting

**Build fails with "cannot find module three"**
→ Run `npm install` again, then `npm run build`

**3D scene doesn't show on mobile**
→ Normal — 3D is hidden on small screens (only shows on desktop ≥ lg breakpoint)

**Contact form submits but no data in Supabase**
→ Check that `.env` file has correct Supabase URL and key, restart dev server

**Admin page shows "Invalid login credentials"**
→ Create a user in Supabase Dashboard → Authentication → Users

**Vercel build error: peer dependencies**
→ React and react-dom are now in `dependencies` (not peer), this is fixed ✅
