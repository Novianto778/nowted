import useSWR from 'swr';
import { Note } from '@/types/collections';
import { fetcher } from '@/utils/fetcher';

const useGetUserNotes = (folderId: number) => {
  const {
    data: notes,
    error,
    isLoading
  } = useSWR<Note[]>(`/api/note?folderId=${folderId}`, fetcher);

  return {
    notes,
    error,
    isLoading
  };
};
export default useGetUserNotes;
