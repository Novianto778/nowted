import { Folder } from '@/types/collections';
import { toast } from 'react-hot-toast';
import useSWR from 'swr';

export const addFolder = async (folderName: string) => {
  try {
    const res = await fetch('/api/folder', {
      method: 'POST',
      body: JSON.stringify({ name: folderName }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
  } catch (error: any) {
    toast.error(error.message);
  }
};

const useCreateNewFolder = () => {
  const { mutate } = useSWR<Folder[]>('/api/folder');

  return { mutate };
};

export default useCreateNewFolder;
