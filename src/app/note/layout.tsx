import React from 'react';

type Props = {
  children: React.ReactNode;
};

const NotesLayout = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4 h-screen">
      left sidebar
      <div className="col-span-2 bg-blue-200">{children}</div>
    </div>
  );
};

export default NotesLayout;
