-- =============================================
-- Rv Media Online — Supabase Database Schema
-- =============================================
-- Run this in your Supabase SQL Editor to create all tables.

-- 1. Contact Form Submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT,
  budget TEXT,
  message TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Newsletter Subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT now(),
  is_active BOOLEAN DEFAULT true
);

-- 3. Blog Posts (CMS-ready)
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  read_time TEXT,
  color TEXT DEFAULT '#7C3AED',
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT,
  avatar_url TEXT,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  text TEXT NOT NULL,
  metric TEXT,
  color TEXT DEFAULT '#7C3AED',
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Case Studies
CREATE TABLE IF NOT EXISTS case_studies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  challenge TEXT,
  result TEXT,
  metrics JSONB DEFAULT '[]',
  image_url TEXT,
  color TEXT DEFAULT '#7C3AED',
  is_published BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- Row Level Security (RLS) Policies
-- =============================================

-- Enable RLS on all tables
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

-- Contact Submissions: anyone can INSERT, only authenticated users can SELECT/UPDATE
CREATE POLICY "Allow public insert on contact_submissions"
  ON contact_submissions FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "Allow authenticated read on contact_submissions"
  ON contact_submissions FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "Allow authenticated update on contact_submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated USING (true);

-- Newsletter: anyone can INSERT, only authenticated can SELECT
CREATE POLICY "Allow public subscribe"
  ON newsletter_subscribers FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "Allow authenticated read subscribers"
  ON newsletter_subscribers FOR SELECT
  TO authenticated USING (true);

-- Blog Posts: anyone can SELECT published posts
CREATE POLICY "Allow public read published blog posts"
  ON blog_posts FOR SELECT
  TO anon USING (is_published = true);

CREATE POLICY "Allow authenticated manage blog posts"
  ON blog_posts FOR ALL
  TO authenticated USING (true);

-- Testimonials: anyone can read active testimonials
CREATE POLICY "Allow public read active testimonials"
  ON testimonials FOR SELECT
  TO anon USING (is_active = true);

CREATE POLICY "Allow authenticated manage testimonials"
  ON testimonials FOR ALL
  TO authenticated USING (true);

-- Case Studies: anyone can read published case studies
CREATE POLICY "Allow public read published case studies"
  ON case_studies FOR SELECT
  TO anon USING (is_published = true);

CREATE POLICY "Allow authenticated manage case studies"
  ON case_studies FOR ALL
  TO authenticated USING (true);

-- =============================================
-- Indexes for performance
-- =============================================
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_blog_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_published ON blog_posts(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_testimonials_active ON testimonials(is_active, display_order);
CREATE INDEX IF NOT EXISTS idx_case_studies_published ON case_studies(is_published, display_order);
