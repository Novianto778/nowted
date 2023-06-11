import React from 'react';
import { Note } from '@/types/collections';
import { useNowtedEditor } from '@/hooks/useNowtedEditor';
import { TipTap } from './Tiptap';
import { Toolbar } from './Toolbar';
import { Calendar, FolderIcon } from 'lucide-react';
import { debounce } from '@/utils/debounce';
import { updateNote } from '@/utils/updateNote';
import { useSWRConfig } from 'swr';
import useGetCurrentFolderAndNote from '@/hooks/useGetCurrentFolderAndNote';

type Props = {
  note: Note;
};

const Nowted = ({ note }: Props) => {
  const { mutate } = useSWRConfig();
  const { currentFolder } = useGetCurrentFolderAndNote();
  const updateContent = debounce(
    async (id: string, title: string, content: string) => {
      await updateNote(id, title, content);
      mutate(`/api/note?folderId=${note.folderId}`);
    },
    2000
  );
  const editor = useNowtedEditor({
    content: note?.content || '',
    noteId: note?.id,
    title: note?.title,
    updateContent
  });

  return (
    <div className="w-full px-8 pt-8">
      <div>
        <h1>{note.title}</h1>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex gap-x-8">
            <div className="flex min-w-[80px] items-center gap-2">
              <Calendar className="h-4 w-4" />
              Date
            </div>
            <p className="text-white underline">
              {new Date(note?.created_at || Date.now()).toLocaleDateString(
                'id-ID',
                {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric'
                }
              )}
            </p>
          </div>
          <div className="flex gap-x-8">
            <div className="flex min-w-[80px] items-center gap-2">
              <FolderIcon className="h-4 w-4" />
              Folder
            </div>
            <p className="capitalize text-white underline">{currentFolder}</p>
          </div>
        </div>
        <div className="mt-2">
          <Toolbar editor={editor} />
        </div>
      </div>
      <div className="prose max-h-editor-content w-full max-w-full overflow-y-scroll text-gray-200 scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-gray-300">
        <TipTap editor={editor} />
      </div>
    </div>
  );
};

export default Nowted;
