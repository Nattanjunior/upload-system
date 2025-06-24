import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URI as string,
  process.env.SUPABASE_KEY as string,
  { auth: { persistSession: false } }
);

export const SupaBaseProvider = {
  provide: 'SUPABASE_PROVIDER',
  userValue: supabase,
}