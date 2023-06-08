'use client';
import useCreateNewFolder, { addFolder } from '@/hooks/useCreateNewFolder';
import useGetUserFolder from '@/hooks/useGetUserFolder';
import { FolderPlus } from 'lucide-react';
import FolderListContent from '../Folder/FolderListContent';
import SidebarHeader from './sidebar-header';
import SidebarListItem from './sidebar-list-item';
import SidebarWrapper from './sidebar-wrapper';

const Sidebar = () => {
  const { mutate } = useCreateNewFolder();
  const { folders } = useGetUserFolder();

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
        <div className="flex flex-col">
          <FolderListContent />
        </div>
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
