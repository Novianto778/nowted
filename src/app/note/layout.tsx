import Sidebar from '@/components/layout/Sidebar';

type Props = {
  children: React.ReactNode;
};

const NotesLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen bg-background">
      <div className="w-[300px]">
        <Sidebar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default NotesLayout;
