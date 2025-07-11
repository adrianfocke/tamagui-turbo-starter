import { createClient } from '@supabase/supabase-js';

let SUPABASE_URL = 'https://reoqjnezstinvvufiucd.supabase.co';
let SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlb3FqbmV6c3RpbnZ2dWZpdWNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyNDUwMTQsImV4cCI6MjA2NzgyMTAxNH0.kNrkk4Jcju5NnnULsZj8U6VJ9PiJPGBtluOsJ_9N2Vo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
