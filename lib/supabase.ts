import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.Next_PUBLIC_supabase_URL ?? '',
  process.env.Next_PUBLIC_supabase_anon_key ?? ''
);
