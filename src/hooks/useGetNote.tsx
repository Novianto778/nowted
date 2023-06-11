import useSWR from 'swr';
import { Note } from '@/types/collections';
import { fetcher } from '@/utils/fetcher';

const useGetNote = (noteId: string) => {
  const { data, error, isLoading } = useSWR<Note>(
    `/api/note/${noteId}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading
  };
};
export default useGetNote;
