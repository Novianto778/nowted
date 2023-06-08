import { Folder } from '@/types/collections';
import useSWR from 'swr';

export const addFolder = async (folderName: string) => {
  const res = await fetch('/api/folder', {
    method: 'POST',
    body: JSON.stringify({ name: folderName }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  return data;
};

const useCreateNewFolder = () => {
  const { mutate } = useSWR<Folder[]>('/api/folder');

  return { mutate };
};

export default useCreateNewFolder;
