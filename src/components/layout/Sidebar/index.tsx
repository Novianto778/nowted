'use client';
import useGetUserFolder from '@/hooks/useGetUserFolder';
import { FolderPlus } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SidebarHeader from './sidebar-header';
import SidebarListItem from './sidebar-list-item';
import SidebarWrapper from './sidebar-wrapper';
import { Skeleton } from '@/components/ui';
import useCreateNewFolder, { addFolder } from '@/hooks/useCreateNewFolder';
import { useState } from 'react';

const SHOW_LIMIT = 5;

const Sidebar = () => {
  const { folders, error, isLoading } = useGetUserFolder();
  const { mutate } = useCreateNewFolder();
  const [showAllFolders, setShowAllFolders] = useState(false);

  const pathname = usePathname();
  const arrayOfPathname = pathname.split('/');
  const currentFolder = arrayOfPathname[2];
  // const currentNote = arrayOfPathname[3];

  const handleCreateNewFolder = async () => {
    const folderName = prompt('Folder Name');
    if (folderName) {
      await mutate(addFolder(folderName), {
        optimisticData: [
          ...(folders ?? []),
          {
            id: Math.random(),
            name: folderName,
            created_at: new Date().toISOString(),
            userId: '123'
          }
        ]
      });
    }
  };

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

  // console.log(currentFolder, currentNote);
  // console.log(folder);

  return (
    <SidebarWrapper>
      <SidebarHeader />
      <div className="mt-7 flex flex-col gap-2">
        <h6 className="px-5 text-sm">Recent</h6>
        <div className="flex flex-col">
          <SidebarListItem type="file" title="All Notes" />
          <SidebarListItem type="file" title="All Notes" />
          <SidebarListItem type="file" title="All Notes" />
        </div>
      </div>
      <div className="mt-7 flex flex-col gap-2">
        <div className="flex items-center justify-between px-5">
          <h6 className="text-sm">Folder</h6>
          <FolderPlus
            className="h-5 w-5 cursor-pointer"
            onClick={handleCreateNewFolder}
          />
        </div>
        <div className="flex flex-col">{content}</div>
      </div>
      <div className="mt-7 flex flex-col gap-2">
        <h6 className="px-5 text-sm">More</h6>
        <div className="flex flex-col">
          <SidebarListItem type="favorite" title="Favorite" />
          <SidebarListItem type="trash" title="Trash" />
          <SidebarListItem type="archived" title="Archived Note" />
        </div>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
