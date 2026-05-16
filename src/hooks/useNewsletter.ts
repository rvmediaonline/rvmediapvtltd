import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export function useNewsletter() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim() || !emailRe.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)
    try {
      const { error: dbError } = await supabase
        .from('newsletter_subscribers')
        .insert({ email: email.trim().toLowerCase() })

      if (dbError) {
        // Unique constraint violation = already subscribed
        if (dbError.code === '23505') {
          setSuccess(true) // Show success anyway — they're already in
        } else {
          throw dbError
        }
      } else {
        setSuccess(true)
        setEmail('')
      }
    } catch (err) {
      console.error('Newsletter error:', err)
      if (import.meta.env.VITE_SUPABASE_URL?.includes('placeholder')) {
        setSuccess(true)
      } else {
        setError('Failed to subscribe. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return { email, setEmail, loading, success, error, subscribe }
}
