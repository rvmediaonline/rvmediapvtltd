import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Session, User } from '@supabase/supabase-js'

/**
 * Hook to manage Supabase Authentication session and user state.
 * Automatically handles session refreshing and state changes.
 */
export function useSupabaseAuth() {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 1. Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // 2. Listen for auth state changes (login, logout, token refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return {
    session,
    user,
    loading,
    signOut: () => supabase.auth.signOut(),
  }
}
