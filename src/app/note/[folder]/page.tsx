'use client';
import { SelectedFolderNoteList } from '@/components/layout/Folder';

type Props = {
  params: {
    folder: string;
  };
};

const Folder = ({ params: { folder } }: Props) => {
  return (
    <div className="flex h-screen w-full">
      <SelectedFolderNoteList folder={folder} />
      <div className="flex">
        <h6>Choose note</h6>
      </div>
    </div>
  );
};

export default Folder;
