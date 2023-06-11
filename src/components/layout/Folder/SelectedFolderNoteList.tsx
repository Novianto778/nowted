'use client';
import { NoteList } from '../Notes';
import useGetUserFolder from '@/hooks/useGetUserFolder';
import { FolderLock } from 'lucide-react';
import SelectFolder from './SelectFolder';

type Props = {
  folder: string;
};

const SelectedFolderNoteList = ({ folder }: Props) => {
  const { folders, error, isLoading } = useGetUserFolder();

  const folderId = folders?.find(item => item.name === folder)?.id || 0;
  const folderName = folders?.find(item => item.name === folder)?.name || '';
  const isFolderExist = folders?.find(item => item.name === folder);

  if (error) {
    return <div>{error.message}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else if (!isFolderExist) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-4">
            <FolderLock className="h-10 w-10" />
            <p className="text-3xl font-semibold">Folder not found</p>
          </div>
          <SelectFolder className="h-auto" />
        </div>
      </div>
    );
  }
  return (
    <div className="h-full w-[350px] bg-secondary-background p-4">
      <h2 className="text-lg font-semibold capitalize text-white">{folder}</h2>
      <NoteList folderId={folderId} folderName={folderName} />
    </div>
  );
};

export default SelectedFolderNoteList;
