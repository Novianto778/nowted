export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      folder: {
        Row: {
          created_at: string | null;
          id: number;
          name: string;
          userId: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name: string;
          userId?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name?: string;
          userId?: string | null;
        };
      };
      notes: {
        Row: {
          content: string | null;
          created_at: string | null;
          deleted_at: string | null;
          folderId: number | null;
          id: string;
          isPublic: boolean | null;
          publicLink: string | null;
          title: string;
          updated_at: string | null;
          userId: string | null;
        };
        Insert: {
          content?: string | null;
          created_at?: string | null;
          deleted_at?: string | null;
          folderId?: number | null;
          id: string;
          isPublic?: boolean | null;
          publicLink?: string | null;
          title: string;
          updated_at?: string | null;
          userId?: string | null;
        };
        Update: {
          content?: string | null;
          created_at?: string | null;
          deleted_at?: string | null;
          folderId?: number | null;
          id?: string;
          isPublic?: boolean | null;
          publicLink?: string | null;
          title?: string;
          updated_at?: string | null;
          userId?: string | null;
        };
      };
      profiles: {
        Row: {
          created_at: string | null;
          id: number;
          profile_pic: string | null;
          username: string;
          uuid: string;
        };
        Insert: {
          created_at?: string | null;
          id: number;
          profile_pic?: string | null;
          username: string;
          uuid: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          profile_pic?: string | null;
          username?: string;
          uuid?: string;
        };
      };
      sharing: {
        Row: {
          accessLevel: string | null;
          created_at: string | null;
          id: number;
          noteId: string | null;
          userId: string | null;
        };
        Insert: {
          accessLevel?: string | null;
          created_at?: string | null;
          id?: number;
          noteId?: string | null;
          userId?: string | null;
        };
        Update: {
          accessLevel?: string | null;
          created_at?: string | null;
          id?: number;
          noteId?: string | null;
          userId?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
