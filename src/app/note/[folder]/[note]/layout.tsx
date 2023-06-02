import React from 'react';

type Props = {
  children: React.ReactNode;
  params: {
    folder: string;
  };
};

const NoteLayout = ({ children, params: { folder } }: Props) => {
  return (
    <div className="grid grid-cols-2">
      {folder}
      {children}
    </div>
  );
};

export default NoteLayout;
