import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const SelectFolder = ({ className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center',
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Select a folder</h1>
          <p className="text-muted-foreground">
            Select a folder to view its contents
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Create a folder</h1>

          <p className="text-muted-foreground">
            Create a folder to organize your notes
          </p>

          <button className="flex items-center gap-2.5">
            <Plus className="h-5 w-5" />
            New Folder
          </button>

          <p className="text-muted-foreground">
            You can also create a folder by clicking the plus icon in the
            sidebar
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectFolder;
