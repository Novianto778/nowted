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
        Relationships: [
          {
            foreignKeyName: 'folder_userId_fkey';
            columns: ['userId'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      notes: {
        Row: {
          content: string | null;
          created_at: string | null;
          deleted_at: string | null;
          folderId: number | null;
          id: string;
          isArchived: boolean | null;
          isFavorited: boolean | null;
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
          isArchived?: boolean | null;
          isFavorited?: boolean | null;
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
          isArchived?: boolean | null;
          isFavorited?: boolean | null;
          isPublic?: boolean | null;
          publicLink?: string | null;
          title?: string;
          updated_at?: string | null;
          userId?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'notes_folderId_fkey';
            columns: ['folderId'];
            referencedRelation: 'folder';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'notes_userId_fkey';
            columns: ['userId'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      profiles: {
        Row: {
          created_at: string | null;
          id: string;
          profile_pic: string | null;
          username: string;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          profile_pic?: string | null;
          username: string;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          profile_pic?: string | null;
          username?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
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
        Relationships: [
          {
            foreignKeyName: 'sharing_noteId_fkey';
            columns: ['noteId'];
            referencedRelation: 'notes';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'sharing_userId_fkey';
            columns: ['userId'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
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
