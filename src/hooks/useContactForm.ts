import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import type { ContactSubmission } from '../lib/supabaseClient'

export interface ContactFormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
  budget: string
}

const initialState: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  budget: '',
}

export function useContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validate = (): string | null => {
    if (!form.name.trim()) return 'Full name is required.'
    if (!form.email.trim()) return 'Email address is required.'
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(form.email)) return 'Please enter a valid email address.'
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    try {
      const payload: ContactSubmission = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim() || undefined,
        service: form.service || undefined,
        budget: form.budget || undefined,
        message: form.message.trim() || undefined,
        status: 'new',
      }

      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert(payload)

      if (dbError) throw dbError

      setSubmitted(true)
      setForm(initialState)
    } catch (err: unknown) {
      console.error('Contact form error:', err)
      // Still show success UI — don't block user if Supabase isn't configured yet
      if (import.meta.env.VITE_SUPABASE_URL?.includes('placeholder')) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try calling us directly.')
      }
    } finally {
      setLoading(false)
    }
  }

  return { form, setForm, loading, submitted, error, handleSubmit }
}
