import React from 'react';
import { Note } from '@/types/collections';
import { removeHTMLTags } from '@/utils/removeHTMLTags';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import useGetCurrentFolderAndNote from '@/hooks/useGetCurrentFolderAndNote';

type Props = {
  note: Note;
  folderName: string;
};

const NoteCard = ({ note, folderName }: Props) => {
  const { currentNote } = useGetCurrentFolderAndNote();
  const isActive = currentNote === note.id;

  return (
    <Link
      href={`/note/${folderName}/${note.id}`}
      className={cn(
        'flex flex-col gap-2 rounded-sm bg-secondary p-4',
        isActive && 'bg-tertiary'
      )}
    >
      <h6 className="font-semibold text-white">{note.title}</h6>
      <div className="flex items-center justify-between gap-3">
        <p>
          {new Date(note.created_at ?? '').toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          })}
        </p>
        <p className="truncate">{removeHTMLTags(note.content || '')}</p>
      </div>
    </Link>
  );
};

export default NoteCard;
