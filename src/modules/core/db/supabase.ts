import { createClient } from '@supabase/supabase-js'

export type Collection = {
    id: number;
    symbol: string;
    collectioname: string;
    imagepath: string;
}

// Custom type for how supabase interactions are tracked and processed
export type SupabaseResult = {
  // The database result
  result: any;
  // Whether it was successful or not
  success: boolean;
}


const supabase = createClient(
  process.env.supaURL!,process.env.supaKEY!);


export default supabase;

