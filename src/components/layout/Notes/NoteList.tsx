'use client';

import useGetUserNotes from '@/hooks/useGetUserNotes';
import NoteCard from './NoteCard';

type Props = {
  folderId: number;
  folderName: string;
};

const NoteList = ({ folderId, folderName }: Props) => {
  const { notes, isLoading, error } = useGetUserNotes(folderId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (notes?.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-white">No notes yet</p>
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-col gap-4">
      {notes?.map(note => {
        return <NoteCard note={note} folderName={folderName} key={note.id} />;
      })}
      {/* <div className="flex flex-col gap-2 rounded-sm bg-tertiary p-4">
        <h6 className="font-semibold text-white">My Goals For Next Year</h6>
        <div className="flex items-center justify-between gap-3">
          <p>31/11/2022</p>
          <p className="truncate">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            dolor tempora commodi quos, repellat accusantium ratione hic beatae
            impedit ea.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default NoteList;
