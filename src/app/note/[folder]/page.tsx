'use client';
import useGetUserFolder from '@/hooks/useGetUserFolder';
import { FolderLock } from 'lucide-react';
import { SelectFolder } from '../../../components/layout/Folder';

type Props = {
  params: {
    folder: string;
  };
};

const Folder = ({ params: { folder } }: Props) => {
  const { folders, error, isLoading } = useGetUserFolder();

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
    <div className="grid grid-cols-2">
      <h2>{folder}</h2>
      <p>choose note</p>
    </div>
  );
};

export default Folder;
