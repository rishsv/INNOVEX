import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ttmfkdqyhvyedrhwghsr.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bWZrZHF5aHZ5ZWRyaHdnaHNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkxMDg5NzYsImV4cCI6MjEwNDY4NDk3Nn0.LZOGSnMZPMpWxapmCsTqmNGDNvi6SeW-2EzOxI06Vx0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin
    }
  });
  if (error) {
    console.error('Supabase Google Auth Error:', error.message);
    throw error;
  }
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Supabase SignOut Error:', error.message);
    throw error;
  }
}

// Fetch live products from Supabase DB or fallback
export async function fetchSupabaseProducts() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*');
    if (error || !data || data.length === 0) {
      return null;
    }
    return data;
  } catch (e) {
    return null;
  }
}
