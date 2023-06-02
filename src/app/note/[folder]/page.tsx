import React from 'react';

type Props = {
  params: {
    folder: string;
  };
};

const Folder = ({ params: { folder } }: Props) => {
  return (
    <div className="grid grid-cols-2">
      <h2>{folder}</h2>
      <p>choose note</p>
    </div>
  );
};

export default Folder;
