# Supabase Agent Skills 🤖

These instructions help AI agents interact with the **Rv Media Online** Supabase backend efficiently.

## 🗃 Database Schema
- **`contact_submissions`**: Captures leads from the contact form. Use this for lead management features.
- **`newsletter_subscribers`**: Stores newsletter signups.
- **`blog_posts`**: CMS for the agency blog.
- **`testimonials`**: Dynamic client reviews.

## 🔐 Security (RLS)
- Public users can only **INSERT** into `contact_submissions` and `newsletter_subscribers`.
- Only **authenticated admins** can SELECT/UPDATE/DELETE from all tables.
- RLS policies are defined in `supabase/schema.sql`.

## 🛠 Helper Tools
- **`src/lib/supabaseClient.ts`**: The main client instance. Always import from here.
- **`src/hooks/useSupabaseAuth.ts`**: Handles session refreshing and user state.

## 🚀 Common Tasks
- **To add a new lead**: `supabase.from('contact_submissions').insert([data])`
- **To check auth status**: Use the `useSupabaseAuth` hook in components.
- **To manage blog posts**: Only possible after logging in at `/admin`.
