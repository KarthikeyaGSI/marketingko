import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContentType = 'homepage' | 'services' | 'case_studies' | 'testimonials';

export async function getContent(type: ContentType) {
  const { data, error } = await supabase
    .from('content')
    .select('*')
    .eq('type', type)
    .single();
    
  if (error) {
    console.error(`Error fetching ${type}:`, error);
    return null;
  }
  
  return data.data;
}
