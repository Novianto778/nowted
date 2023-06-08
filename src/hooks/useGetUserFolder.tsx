import useSWR from 'swr';
import { Folder } from '@/types/collections';
import { fetcher } from '@/utils/fetcher';

const useGetUserFolder = () => {
  const {
    data: folders,
    error,
    isLoading
  } = useSWR<Folder[]>('/api/folder', fetcher);

  return {
    folders,
    error,
    isLoading
  };
};
export default useGetUserFolder;
