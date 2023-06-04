type Props = {
  children: React.ReactNode;
};

const SidebarWrapper = ({ children }: Props) => {
  return (
    <div className="h-screen overflow-y-scroll bg-background py-8 scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-gray-300">
      {children}
    </div>
  );
};

export default SidebarWrapper;
