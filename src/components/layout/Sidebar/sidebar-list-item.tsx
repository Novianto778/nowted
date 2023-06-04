import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { File, LucideIcon, Folder, Star, Trash, Archive } from 'lucide-react';

const ListVariants = cva(
  'px-5 py-2.5 flex items-center gap-2.5 duration-300 cursor-pointer',
  {
    variants: {
      type: {
        file: 'bg-transparent text-white',
        folder: 'bg-transparent text-white',
        favorite: 'bg-transparent text-white',
        trash: 'bg-transparent text-white',
        archived: 'bg-transparent text-white'
      },
      isActive: {
        true: 'bg-tertiary text-white',
        false: 'hover:bg-tertiary hover:text-white'
      }
    },
    compoundVariants: [
      {
        type: 'file',
        isActive: true,
        className: 'bg-primary text-white'
      },
      {
        type: 'file',
        isActive: false,
        className: 'hover:bg-primary hover:text-white'
      }
    ]
  }
);

type ListVariantsProps = VariantProps<typeof ListVariants>;

export interface SidebarListItemProps
  extends ListVariantsProps,
    React.HTMLAttributes<HTMLDivElement> {
  title: string;
  isActive?: boolean;
}

const SidebarListItem = ({
  type,
  className,
  title,
  isActive = false,
  ...props
}: SidebarListItemProps) => {
  const icons = [
    { type: 'file', icon: File },
    { type: 'folder', icon: Folder },
    { type: 'favorite', icon: Star },
    { type: 'trash', icon: Trash },
    { type: 'archived', icon: Archive }
  ];
  const Icon = icons.find(icon => icon.type === type)?.icon as LucideIcon;

  return (
    <div className={cn(ListVariants({ type, isActive }), className)} {...props}>
      <span className="flex h-5 w-5 items-center justify-center">
        <Icon className="h-5 w-5" />
      </span>
      <span>{title}</span>
    </div>
  );
};

export default SidebarListItem;
