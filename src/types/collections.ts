import { Database } from './supabase';

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Folder = Database['public']['Tables']['folder']['Row'];
export type Note = Database['public']['Tables']['notes']['Row'];
export type NoteWithFolder = Note & {
  folder: {
    id: string;
    name: string;
  };
};
