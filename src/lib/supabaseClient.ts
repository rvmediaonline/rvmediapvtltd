import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '[Supabase] Missing env vars. Copy .env.example to .env and fill in your Supabase credentials.\n' +
    'Forms will work in UI-only mode until configured.'
  )
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)

// ─── Database Types ────────────────────────────────────────────────────────────

export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone?: string
  service?: string
  budget?: string
  message?: string
  status?: 'new' | 'contacted' | 'qualified' | 'closed'
  created_at?: string
}

export interface NewsletterSubscriber {
  id?: string
  email: string
  subscribed_at?: string
  is_active?: boolean
}

export interface BlogPost {
  id?: string
  title: string
  slug: string
  category?: string
  excerpt?: string
  content?: string
  image_url?: string
  read_time?: string
  color?: string
  is_published?: boolean
  published_at?: string
  created_at?: string
}

export interface Testimonial {
  id?: string
  name: string
  role?: string
  avatar_url?: string
  rating?: number
  text: string
  metric?: string
  color?: string
  is_active?: boolean
  display_order?: number
}
