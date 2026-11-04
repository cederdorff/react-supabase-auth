import { supabase } from "./supabase";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Ligesom fetch(), men med URL, apikey og token sat på
export async function apiFetch(path, options = {}) {
  // getSession() læser tokenet fra localStorage. Er du logget ud, er data.session null
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;

  // Behold de headers, der blev sendt med, og tilføj apikey
  const headers = {
    ...options.headers,
    apikey: supabaseAnonKey,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return fetch(`${supabaseUrl}${path}`, { ...options, headers });
}
