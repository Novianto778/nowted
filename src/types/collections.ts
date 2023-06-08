import { Database } from './supabase';

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Folder = Database['public']['Tables']['folder']['Row'];
