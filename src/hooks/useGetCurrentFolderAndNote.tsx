import { usePathname } from 'next/navigation';

const useGetCurrentFolderAndNote = () => {
  const pathname = usePathname();
  const arrayOfPathname = pathname.split('/');
  const currentFolder = arrayOfPathname[2];
  const currentNote = arrayOfPathname[3];
  return { currentFolder, currentNote };
};

export default useGetCurrentFolderAndNote;
