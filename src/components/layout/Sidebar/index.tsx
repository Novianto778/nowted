import SidebarWrapper from './sidebar-wrapper';
import SidebarHeader from './sidebar-header';
import SidebarListItem from './sidebar-list-item';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHeader />
      <div className="mt-7 flex flex-col gap-2">
        <h6 className="px-5">Recent</h6>
        <div className="flex flex-col">
          <SidebarListItem type="file" title="All Notes" />
          <SidebarListItem type="file" title="All Notes" />
          <SidebarListItem type="file" title="All Notes" />
        </div>
      </div>
      <div className="mt-7 flex flex-col gap-2">
        <h6 className="px-5">Folder</h6>
        <div className="flex flex-col">
          <SidebarListItem type="folder" title="New Folder" />
          <SidebarListItem type="folder" title="New Folder" />
          <SidebarListItem type="folder" title="New Folder" />
        </div>
      </div>
      <div className="mt-7 flex flex-col gap-2">
        <h6 className="px-5">More</h6>
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
