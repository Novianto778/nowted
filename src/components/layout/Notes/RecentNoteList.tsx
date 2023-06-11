'use client';
import { useRouter } from 'next/navigation';
import SidebarListItem from '../Sidebar/sidebar-list-item';
import useGetRecentNote from '@/hooks/useGetRecentNote';
import useGetCurrentFolderAndNote from '../../../hooks/useGetCurrentFolderAndNote';

const RecentNoteList = () => {
  const router = useRouter();
  const { notes, isLoading, error } = useGetRecentNote();
  const { currentNote, currentFolder } = useGetCurrentFolderAndNote();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col">
      {notes?.map(note => (
        <SidebarListItem
          key={note.id}
          type="file"
          title={note.title}
          onClick={() => router.push(`/note/${note.folder.name}/${note.id}`)}
          isActive={
            currentNote === note.id && currentFolder === note.folder.name
          }
        />
      ))}
    </div>
  );
};

export default RecentNoteList;
