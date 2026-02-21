import { createClient } from "@supabase/supabase-js";

// --- CONFIGURATION ---
// Replace these values with your actual Supabase project details
// You can find these in your Supabase Dashboard under Settings > API
const SUPABASE_URL = "https://wezvkewmansxaltjoomy.supabase.co";
const SUPABASE_PUBLIC_KEY = "sb_publishable_7hoEf3KcwRjEd4vKS87Glg_WT6tnenE";

// Initialize the Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
