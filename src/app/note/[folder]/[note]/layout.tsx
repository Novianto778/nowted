import React from 'react';
import { SelectedFolderNoteList } from '@/components/layout/Folder';

type Props = {
  children: React.ReactNode;
  params: {
    folder: string;
  };
};

const NoteLayout = ({ children, params: { folder } }: Props) => {
  return (
    <div className="flex h-screen w-full">
      <SelectedFolderNoteList folder={folder} />
      {children}
    </div>
  );
};

export default NoteLayout;
