import { NoteWithFolder } from '@/types/collections';
import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';

const useGetRecentNote = () => {
  const {
    data: notes,
    error,
    isLoading,
    mutate
  } = useSWR<NoteWithFolder[]>('/api/note/recent', fetcher);

  return {
    notes,
    error,
    isLoading,
    mutate
  };
};
export default useGetRecentNote;
