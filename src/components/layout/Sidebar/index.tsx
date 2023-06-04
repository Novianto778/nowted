import SidebarWrapper from './sidebar-wrapper';
import SidebarHeader from './sidebar-header';
import SidebarListItem from './sidebar-list-item';
import { FolderPlus } from 'lucide-react';

const Sidebar = () => {
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
          <FolderPlus className="h-5 w-5 cursor-pointer" />
        </div>
        <div className="flex flex-col">
          <SidebarListItem type="folder" title="New Folder" isActive />
          <SidebarListItem type="folder" title="New Folder" />
          <SidebarListItem type="folder" title="New Folder" />
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
