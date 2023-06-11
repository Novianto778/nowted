import { Note } from '@/types/collections';
import { toast } from 'react-hot-toast';

export const updateNote = async (noteId: string, title: string, content:string) => {
  try {
    const res = await fetch(`/api/note/${noteId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);
    return data as Note;
  } catch (error: any) {
    toast.error(error.message);
  }
};
