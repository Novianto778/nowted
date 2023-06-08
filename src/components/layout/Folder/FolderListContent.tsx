'use client';
import { useState } from 'react';
import useGetUserFolder from '@/hooks/useGetUserFolder';
import { Skeleton } from '@/components/ui';
import SidebarListItem from '../Sidebar/sidebar-list-item';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SHOW_LIMIT = 5;

const FolderListContent = () => {
  const { folders, error, isLoading } = useGetUserFolder();

  const [showAllFolders, setShowAllFolders] = useState(false);
  const pathname = usePathname();
  const arrayOfPathname = pathname.split('/');
  const currentFolder = arrayOfPathname[2];
  // const currentNote = arrayOfPathname[3];

  let content;

  if (error) {
    content = <div>{error.message}</div>;
  } else if (isLoading) {
    content = (
      <div className="mt-4 flex w-full flex-col gap-1 px-5">
        {[...new Array(3).fill(0)].map((_, index) => (
          <Skeleton key={index} className="h-6 w-full rounded-none" />
        ))}
      </div>
    );
  } else if (folders && showAllFolders) {
    content = (
      <div>
        {folders?.map(item => (
          <Link href={`/note/${item.name}`} key={item.id}>
            <SidebarListItem
              type="folder"
              title={item.name}
              isActive={currentFolder === item.name}
            />
          </Link>
        ))}
        <div
          className="cursor-pointer px-5 text-sm text-white"
          onClick={() => setShowAllFolders(false)}
        >
          Show Less
        </div>
      </div>
    );
  } else if (folders && !showAllFolders) {
    content = (
      <div>
        {folders?.slice(0, SHOW_LIMIT).map(item => (
          <Link href={`/note/${item.name}`} key={item.id}>
            <SidebarListItem
              type="folder"
              title={item.name}
              isActive={currentFolder === item.name}
            />
          </Link>
        ))}
        <div
          className="cursor-pointer px-5 text-sm text-white"
          onClick={() => setShowAllFolders(true)}
        >
          Show All
        </div>
      </div>
    );
  }

  return content ?? null;
};

export default FolderListContent;
