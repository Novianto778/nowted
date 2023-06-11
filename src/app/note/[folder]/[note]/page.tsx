'use client';

import useGetNote from '@/hooks/useGetNote';
import Nowted from '@/components/editor/Nowted';

type Props = {
  params: {
    folder: string;
    note: string;
  };
};

const Note = ({ params: { note } }: Props) => {
  const { data, isLoading, error } = useGetNote(note);
  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  if (!data) return <p>No note</p>;
  return (
    <div className="w-full">
      <Nowted note={data} />
    </div>
  );
};

export default Note;
